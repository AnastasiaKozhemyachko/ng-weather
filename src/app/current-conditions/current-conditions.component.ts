import {ChangeDetectionStrategy, Component, computed, inject, Signal, signal} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../conditions-and-zip.type';
import {LocationCacheService} from '../servises/location-cache.service';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {CurrentConditions} from './current-conditions.type';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentConditionsComponent {
  weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  protected cacheService = inject(LocationCacheService);

  // reacts to new locations
  conditions$: Observable<ConditionsAndZip[]> = toObservable(this.locationService.newlocation).pipe(
      filter(zip => !!zip),
      mergeMap((zip) => this.fetchDataFromStorageOrRequest(zip)),
      map(() => this.transform())
  );

  zipTrack = (index: number, item: ConditionsAndZip) => item.zip;

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode]);
  }

  // Fetch data from cache or request it if not available
  private fetchDataFromStorageOrRequest(zip: string): Observable<CurrentConditions> {
    const cache = this.cacheService.getNoExpirationItem(zip);
    return cache
        ? of(cache)
        : this.weatherService.addCurrentConditionsObserable(zip).pipe(tap((condition: CurrentConditions) => this.cacheService.addData(condition, zip)));
  }

  private transform(): ConditionsAndZip[] {
    return this.locationService.locations().map(zip => ({
      zip,
      data: this.cacheService.getItemValue(zip)
    }));
  }
}
