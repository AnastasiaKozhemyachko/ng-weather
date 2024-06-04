import {Injectable} from '@angular/core';
import {CacheService} from './cache.service';
import {Forecast} from '../forecasts-list/forecast.type';

@Injectable()
export class ForecastCacheService extends CacheService<Forecast>{
    protected _storageKey = 'FORECAST';
    protected _seconds = 7200 * 1000; //2hour
}
