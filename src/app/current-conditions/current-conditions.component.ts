import {ChangeDetectionStrategy, Component, computed, effect, inject, OnDestroy} from '@angular/core';
import {WeatherService} from '../weather.service';
import {LocationService} from '../location.service';
import {ConditionsAndZip} from '../conditions-and-zip.type';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
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

  // Computed property to get current conditions for all locations
  conditions = computed(() => {
    const locations = this.locationService.locations();
    return locations.map(zip => ({zip, data: this.locationCacheService.getItemValue(zip)}));
  });

  // Effect to load current conditions when a new location is added
  loadConditions = effect(() => {
    const zipCode = this.locationService.addLocationSignal();
    if (zipCode) {
      this.weatherService.addCurrentConditionsObservable(zipCode).subscribe(() => this.locationService.addLocation(zipCode));
    }
  }, {allowSignalWrites: true});

  constructor() {
    this.setupFormControl(this.locationFormControl, this.locationCacheService);
    this.setupFormControl(this.forecastFormControl, this.forecastCacheService);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
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
