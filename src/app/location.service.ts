import {Injectable, signal} from '@angular/core';

@Injectable()
export class LocationService {
  locations = signal<string[]>([]);
  addLocationSignal = signal<string>(null);
  deleteLocationSignal = signal<string>(null);

  requestAddLocation(zipcode : string) {
    if (this.locations().includes(zipcode)) {
      return;
    }
    this.addLocationSignal.set(zipcode);
    this.deleteLocationSignal.set(null);
  }

  addLocation(zipcode: string) {
    this.locations.update(value => [...value, zipcode]);
  }

  removeLocation(zipcode : string) {
    this.locations.update(value => value.filter(item => item !== zipcode));
    this.addLocationSignal.set(null);
  }
}
