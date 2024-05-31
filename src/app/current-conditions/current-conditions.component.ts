import {Component, computed, effect, inject, OnInit, Signal, untracked} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../conditions-and-zip.type';
import {zip} from 'rxjs';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
})
export class CurrentConditionsComponent {
  weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();

  constructor() {
    effect(() => {
      const zipcode = this.locationService.newLocation();
      if (zipcode) {
        this.weatherService.addCurrentConditions(zipcode);
      }
    }, { allowSignalWrites: true });
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }

  zipCodeTrack(index: number, item: ConditionsAndZip){
    return item.zip;
  }

  removeLocation(zip: string) {
    this.weatherService.removeCurrentConditions(zip);
  }
}
