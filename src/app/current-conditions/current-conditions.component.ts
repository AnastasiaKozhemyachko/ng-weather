import {Component, inject, Signal} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../conditions-and-zip.type';
import {LocationCacheService} from '../servises/location-cache.service';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {defer, forkJoin, Observable, of} from 'rxjs';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
})
export class CurrentConditionsComponent {
  weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  protected locationCacheService = inject(LocationCacheService);

  conditions: Signal<ConditionsAndZip[]>= toSignal(
      toObservable(this.locationService.locations).pipe(
          mergeMap((locations) => forkJoin(locations.map(zip => this.getData(zip)))),
      )
  );

  getData(zip: string): Observable<ConditionsAndZip> {
    return of(zip).pipe(switchMap(value => defer(() => this.getDataFromStorageOrRequest(value))))
  }

  private getDataFromStorageOrRequest(zip: string) {
    const data = this.locationCacheService.getNoExpirationItem(zip);

    return data
        ? of({zip, data})
        : this.weatherService.addCurrentConditionsObserable(zip).pipe(
            map(condition => ({zip: zip, data: condition})),
            tap((value) => this.locationCacheService.addData(value.data, value.zip)));
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }

  zipCodeTrack(index: number, item: ConditionsAndZip){
    return item.zip;
  }
}
