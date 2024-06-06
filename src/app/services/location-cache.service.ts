import {Injectable} from '@angular/core';
import {CacheService} from './cache.service';
import {LocationCacheType} from './location-cache.type';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CurrentConditions} from '../current-conditions/current-conditions.type';

@Injectable()
export class LocationCacheService extends CacheService<LocationCacheType>{
  protected _seconds = 7200 * 1000; //2hour

  constructor() {
    super('LOCATIONS');
  }

  switchShow(zip: string, isShow: boolean) {
    const updatedData = this.getData().map(item =>
      item.key === zip ? { ...item, value: { ...item.value, isShow } } : item
    );
    localStorage.setItem(this.storageKey, JSON.stringify(updatedData));
  }

  getMapDataOrFetch(request: Observable<CurrentConditions>, key: string): Observable<CurrentConditions> {
    const validData = this.getNonExpiredItem(key);

    if (validData) {
      this.switchShow(key, true);
      return of(validData.conditions);
    }

    return request.pipe(tap((value) => this.addData({conditions: value, isShow: true}, key)));
  }
}
