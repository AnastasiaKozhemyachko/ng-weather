import {ChangeDetectionStrategy, Component, inject, Signal} from '@angular/core';
import {WeatherService} from '../weather.service';
import {LocationService} from '../location.service';
import {Router} from '@angular/router';
import {ConditionsAndZip} from '../conditions-and-zip.type';
import {LocationCacheService} from '../servises/location-cache.service';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {filter, map, mergeMap} from 'rxjs/operators';
import {forkJoin, Observable, of} from 'rxjs';
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
  conditions$: Observable<ConditionsAndZip[]> = toObservable(this.locationService.locations).pipe(
      filter((zip) => !!zip.length),
      mergeMap(zipCodes => {
        const requests = this.fetchData(zipCodes);
        return requests.length ? forkJoin(requests) : of([]);
      })
  );

  zipTrack = (index: number, item: ConditionsAndZip) => item.zip;

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode]);
  }

  // Fetch data from cache or request it if not available
  private fetchData(zipCodes: string[]): Observable<ConditionsAndZip>[] {
    return zipCodes.map(zipCode => {
      const cache = this.cacheService.getNoExpirationItem(zipCode);
      return cache
          ? of({zip: zipCode, data: cache})
          : this.weatherService.addCurrentConditionsObservable(zipCode).pipe(map((condition: CurrentConditions) => ({zip: zipCode, data: condition})));
    });
  }
}
