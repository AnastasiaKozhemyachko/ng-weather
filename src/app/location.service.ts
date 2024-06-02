import {Injectable, signal} from '@angular/core';

@Injectable()
export class LocationService {
  locations = signal<string[] >([]);
  newlocation = signal<string >(null);

  addLocation(zipcode : string) {
    if (this.locations().includes(zipcode)) {
      return;
    }
    this.newlocation.set(zipcode);
    this.locations.update(value => [...value, zipcode]);
  }

  removeLocation(zipcode : string) {
    this.locations.update(value => value.filter(item => item !== zipcode));
  }
}
