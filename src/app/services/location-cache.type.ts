import {CurrentConditions} from '../current-conditions/current-conditions.type';

export interface LocationCacheType {
  conditions: CurrentConditions,
  isShow?: boolean
}
