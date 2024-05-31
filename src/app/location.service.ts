import {Injectable, signal} from '@angular/core';

@Injectable()
export class LocationService {
  newLocation = signal<string>(null);

  addLocation(zipcode : string) {
    this.newLocation.set(zipcode)
  }
}
