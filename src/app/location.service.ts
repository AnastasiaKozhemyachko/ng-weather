import {Injectable, signal} from '@angular/core';

@Injectable()
export class LocationService {
  locations = signal<string[] >([]);

  addLocation(zipcode : string) {
    if (this.locations().includes(zipcode)) {
      return;
    }
    this.locations.update(value => [...value, zipcode]);
  }

  removeLocation(zipcode : string) {
    this.locations.update(value => value.filter(item => item !== zipcode));
  }
}
