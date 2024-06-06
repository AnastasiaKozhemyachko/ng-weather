import {ChangeDetectionStrategy, Component, computed, effect, inject, OnDestroy} from '@angular/core';
import {WeatherService} from '../weather.service';
import {LocationService} from '../location.service';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {LocationCacheService} from '../services/location-cache.service';
import {ForecastCacheService} from '../services/forecast-cache.service';
import {FormControl} from '@angular/forms';
import {CacheService} from '../services/cache.service';

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
    return locations
      .map(zip => {
        const { isShow, conditions } = this.locationCacheService.getItemValue(zip);
        return isShow ? { zip, data: conditions } : null;
      })
      .filter(item => item !== null);
  });

  constructor() {
    this.setupFormControl(this.locationFormControl, this.locationCacheService);
    this.setupFormControl(this.forecastFormControl, this.forecastCacheService);
    this.setInitialLocatonFromCache();

    // Effect to load current conditions when a new location is added
    effect(() => {
      const zipCode = this.locationService.addLocationSignal();
      if (zipCode) {
        this.weatherService.addCurrentConditionsObservable(zipCode).subscribe(() => this.locationService.addLocation(zipCode));
      }
    }, {allowSignalWrites: true});
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.locationService.resetSignalsValue();
  }

  removeLocation(zip: string) {
    this.locationService.removeLocation(zip);
    this.locationCacheService.switchShow(zip, false);
  }

  // Setup form control behavior to update cache service based on form value changes
  private setupFormControl(formControl: FormControl, cacheService: CacheService<any>) {
    formControl.valueChanges.pipe(
      takeUntil(this.destroy$),
      distinctUntilChanged(),
      debounceTime(500)
    ).subscribe(value => cacheService.seconds = value);
  }

  private setInitialLocatonFromCache() {
    const actualValueFromCache = this.locationCacheService.getData()
      .filter(value => value.value.isShow)
      .map(value => <string>value.key)
    this.locationService.locations.set(actualValueFromCache);
  }
}
