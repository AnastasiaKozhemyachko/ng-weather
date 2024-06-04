import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {WeatherService} from '../weather.service';
import {LocationService} from '../location.service';
import {ConditionsAndZip} from '../conditions-and-zip.type';
import {toObservable} from '@angular/core/rxjs-interop';
import {map, switchMap} from 'rxjs/operators';
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
  protected locationService = inject(LocationService);

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
    return zipCodes.map(zipCode => {
      return this.weatherService.addCurrentConditionsObservable(zipCode).pipe(map((condition: CurrentConditions) => ({zip: zipCode, data: condition})))
    });
  }

  private removeInvalidConditions(conditions: ConditionsAndZip[]): ConditionsAndZip[] {
    return conditions.filter(condition => {
      if (!condition.data) {
        this.locationService.removeLocation(condition.zip);
      }
      return !!condition.data;
    });
  }
}
