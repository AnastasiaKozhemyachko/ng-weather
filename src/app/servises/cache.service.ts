import {Inject, Injectable} from '@angular/core';
import {STORAGE_KEY} from '../token';
import {ValueWithExpiry} from '../value-with-expiry.type';

@Injectable({
  providedIn: 'root',
})
export abstract class CacheService<TItem> {
  abstract seconds: number;

  constructor(@Inject(STORAGE_KEY) public storageKey: string) {}

  addData(data: TItem, key: string | number) {
    const currentValue = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    localStorage.setItem(this.storageKey, JSON.stringify([...currentValue, this.transformLocalStorage(data, key)]));
  }

  getData(): ValueWithExpiry<TItem>[] {
    return JSON.parse(localStorage.getItem(this.storageKey));
  }

  getItemData(key: string): TItem {
    return this.getData()?.find((x) => x.key === key)?.value;
  }

  transformLocalStorage(value:TItem, key: string | number): ValueWithExpiry<TItem> {
    return {
      key,
      value,
      expiry: new Date().getTime() + this.seconds,
    }
  }
}
