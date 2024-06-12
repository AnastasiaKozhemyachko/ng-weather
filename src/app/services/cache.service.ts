import {Injectable} from '@angular/core';
import {ValueWithExpiry} from '../value-with-expiry.type';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export abstract class CacheService<TItem> {
  protected abstract _seconds: number;

  get seconds(): number {
    return this._seconds;
  }

  set seconds(value: number | string) {
    this._seconds = +value;
  }

  protected constructor(protected storageKey: string) {
    this.cleanExpiredData(storageKey);
  }

  setData(data: TItem[]) {
    const transformLocalStorage = data.map((value)=> this.transformToCacheItem(value, this.storageKey));
    localStorage.setItem(this.storageKey, JSON.stringify(transformLocalStorage));
  }

  // Adds new data to localStorage or replaces existing data if the key already exists.
  addData(item: TItem, key: string | number): void {
    if (!item) {
      return;
    }
    const currentData: ValueWithExpiry<TItem>[] = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    const index = currentData.findIndex(cacheItem => cacheItem.key === key);
    const newCacheItem = this.transformToCacheItem(item, key);

    if (index !== -1) {
      currentData[index] = newCacheItem;
    } else {
      currentData.push(newCacheItem);
    }

    localStorage.setItem(this.storageKey, JSON.stringify(currentData));
  }

  removeData(key: string | number): void {
    const currentData: ValueWithExpiry<TItem>[] = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    const index = currentData.findIndex(cacheItem => cacheItem.key === key);

    if (index !== -1) {
      currentData.splice(index, 1);
    }

    localStorage.setItem(this.storageKey, JSON.stringify(currentData));
  }

  getData(): ValueWithExpiry<TItem>[] {
    return JSON.parse(localStorage.getItem(this.storageKey)) ?? [];
  }

  getItemValue(key: string): TItem {
    return this.getData()?.find((value) => value.key === key)?.value;
  }

  getNonExpiredItem(key: string): TItem {
    return this.getData().find((value) => value.key === key && this.isDateValid(value.expiration))?.value;
  }

  getDataOrFetch(request: Observable<TItem>, key: string): Observable<TItem> {
    const validData = this.getNonExpiredItem(key)
    if (validData) {
      return of(validData);
    }
    return request.pipe(tap((value) => this.addData(value, key)));
  }

  private isDateValid(expiration: number): boolean {
    return expiration > new Date().getTime();
  }

  private transformToCacheItem(value:TItem, key: string | number): ValueWithExpiry<TItem> {
    return {
      key,
      value,
      expiration: new Date().getTime() + this.seconds,
    }
  }

  private cleanExpiredData(storageKey: string): void {
    const validDate = this.getData().filter((value) => this.isDateValid(value.expiration));
    localStorage.setItem(storageKey, JSON.stringify(validDate));
  }
}