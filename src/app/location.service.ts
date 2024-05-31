import {Injectable, Signal, signal} from '@angular/core';

@Injectable()
export class LocationService {
  newLocation = signal<string>(null);

  addLocation(zipcode : string) {
    this.newLocation.set(zipcode)
  }

  getCurrentConditions(): Signal<string> {
    return this.newLocation.asReadonly();
  }

  // removeLocation(zipcode : string) {
  //   let index = this.locations().indexOf(zipcode);
  //   if (index !== -1){
  //     this.locations().splice(index, 1);
  //     localStorage.setItem(LOCATIONS, JSON.stringify(this.locations()));
  //   }
  // }
}
