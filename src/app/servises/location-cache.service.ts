import {Injectable} from '@angular/core';
import {CacheService} from './cache.service';
import {CurrentConditions} from '../current-conditions/current-conditions.type';

@Injectable()
export class LocationCacheService extends CacheService<CurrentConditions>{
    protected storageKey = 'LOCATIONS';
    protected seconds = 7200 * 1000; //2hour
    // protected seconds = 7;
}
