import {Component, effect, inject, Signal} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../conditions-and-zip.type';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {
  weatherService = inject(WeatherService);
  private router = inject(Router);
  protected locationService = inject(LocationService);
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();

  constructor() {
    effect(() => {
      for (let loc of this.locationService.locations()) {
        this.weatherService.addCurrentConditions(loc);
      }
    });
  }

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }

  zipCodeTrack(index: number, item: ConditionsAndZip){
    return item.zip;
  }

}
