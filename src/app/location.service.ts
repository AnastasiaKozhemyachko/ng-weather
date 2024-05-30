import {Injectable, Signal, signal} from '@angular/core';
import {WeatherService} from "./weather.service";
import {ConditionsAndZip} from './conditions-and-zip.type';
import {zip} from 'rxjs';

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {
  locations = signal<string[]>([]);

  constructor() {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString){
      this.locations.set(JSON.parse(locString));
    }
  }

  addLocation(zipcode : string) {
    const zipcodes = [...this.locations(), zipcode]
    this.locations.set(zipcodes);
    localStorage.setItem(LOCATIONS, JSON.stringify(zipcodes));
  }

  removeLocation(zipcode : string) {
    let index = this.locations().indexOf(zipcode);
    if (index !== -1){
      this.locations().splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(this.locations()));
    }
  }
}
