import {ChangeDetectionStrategy, Component, inject, OnDestroy} from '@angular/core';
import {WeatherService} from '../weather.service';
import {LocationService} from '../location.service';
import {ConditionsAndZip} from '../conditions-and-zip.type';
import {toObservable} from '@angular/core/rxjs-interop';
import {debounceTime, distinctUntilChanged, map, switchMap, takeUntil} from 'rxjs/operators';
import {forkJoin, Observable, of, Subject} from 'rxjs';
import {CurrentConditions} from './current-conditions.type';
import {LocationCacheService} from '../servises/location-cache.service';
import {ForecastCacheService} from '../servises/forecast-cache.service';
import {FormControl} from '@angular/forms';
import {CacheService} from '../servises/cache.service';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentConditionsComponent implements OnDestroy {
  weatherService = inject(WeatherService);
  protected locationService = inject(LocationService);
  protected locationCacheService = inject(LocationCacheService);
  protected forecastCacheService = inject(ForecastCacheService);

  locationFormControl = new FormControl(this.locationCacheService.seconds);
  forecastFormControl = new FormControl(this.forecastCacheService.seconds);

  private destroy$: Subject<void> = new Subject<void>();

  constructor() {
    this.setupFormControl(this.locationFormControl, this.locationCacheService);
    this.setupFormControl(this.forecastFormControl, this.forecastCacheService);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // Observable that updates when the location changes and returns an array of conditions and zip codes
  conditions$: Observable<ConditionsAndZip[]> = toObservable(this.locationService.locations).pipe(
    switchMap(zipCodes => this.fetchData(zipCodes)),
    map((conditions: ConditionsAndZip[]) => this.removeInvalidConditions(conditions))
  );

  zipTrack = (index: number, item: ConditionsAndZip) => item.zip;

  // Fetch data for the given zip codes
  private fetchData = (zipCodes: string[]): Observable<ConditionsAndZip[]> => {
    const requests = this.mapRequests(zipCodes);
    return requests.length ? forkJoin(requests) : of([]);
  }

  // Map each zip code to an observable that fetches current conditions and pairs it with the zip code
  private mapRequests(zipCodes: string[]): Observable<ConditionsAndZip>[] {
    return zipCodes.map(zipCode => this.weatherService.addCurrentConditionsObservable(zipCode).pipe(
      map((condition: CurrentConditions) => ({zip: zipCode, data: condition}))
    ));
  }

  // Remove invalid conditions (e.g., when data is not available)
  private removeInvalidConditions(conditions: ConditionsAndZip[]): ConditionsAndZip[] {
    return conditions.filter(condition => {
      if (!condition.data) {
        this.locationService.removeLocation(condition.zip);
      }
      return !!condition.data;
    });
  }

  // Setup form control behavior to update cache service based on form value changes
  private setupFormControl(formControl: FormControl, cacheService: CacheService<any>) {
    formControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged(),
      debounceTime(500)
    ).subscribe(value => cacheService.seconds = value);
  }
}
