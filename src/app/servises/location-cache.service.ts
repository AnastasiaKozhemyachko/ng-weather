import {Injectable} from '@angular/core';
import {CacheService} from './cache.service';
import {CurrentConditions} from '../current-conditions/current-conditions.type';
import {ConditionsAndZip} from '../conditions-and-zip.type';

@Injectable()
export class LocationCacheService extends CacheService<CurrentConditions>{
    // public seconds = 7200 * 1000; //2hour
    public seconds = 7;

    getDataConditionsAndZip(): ConditionsAndZip[] {
        return this.getData().map(value => this.transform(value))
    }

    private transform(value: any): any {
        return {zip: <string>value.key, data: value.value};
    }
}
