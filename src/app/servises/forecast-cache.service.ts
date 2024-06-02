import {Injectable} from '@angular/core';
import {CacheService} from './cache.service';
import {Forecast} from '../forecasts-list/forecast.type';

@Injectable()
export class ForecastCacheService extends CacheService<Forecast>{
    protected storageKey = 'FORECAST';
    protected seconds = 7200 * 1000; //2hour
    // protected seconds = 7;
}
