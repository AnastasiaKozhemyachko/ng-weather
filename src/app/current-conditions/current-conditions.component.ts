import {Component, effect, inject, Signal} from '@angular/core';
import {WeatherService} from "../weather.service";
import {LocationService} from "../location.service";
import {Router} from "@angular/router";
import {ConditionsAndZip} from '../conditions-and-zip.type';
import {LocationCacheService} from '../servises/location-cache.service';

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
  protected currentConditionsByZip: Signal<ConditionsAndZip[]> = this.weatherService.getCurrentConditions();

  cacheEffect = effect(() => {
    const value = this.weatherService.currentCondition();
    if (value) {
      this.locationCacheService.addData(value.data, value.zip);
    }
  });

  doRequestEffect = effect(() => {
    this.doRequest();
  }, { allowSignalWrites: true });

  showForecast(zipcode : string){
    this.router.navigate(['/forecast', zipcode])
  }

  zipCodeTrack(index: number, item: ConditionsAndZip){
    return item.zip;
  }

  removeLocation(zip: string) {
    this.weatherService.removeCurrentConditions(zip);
  }

  private doRequest() {
    const zipcode = this.locationService.newLocation();
    if (!zipcode) {
      return;
    }

    const data = this.locationCacheService.getNoExpirationItem(zipcode);
    if (data) {
      this.weatherService.updateData(zipcode, data);
    } else {
      this.weatherService.addCurrentConditions(zipcode);
    }
  }
}
