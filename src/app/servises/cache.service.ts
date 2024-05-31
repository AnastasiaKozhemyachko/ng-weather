import {Inject, Injectable} from '@angular/core';
import {STORAGE_KEY} from '../token';
import {ValueWithExpiry} from '../value-with-expiry.type';

@Injectable({
  providedIn: 'root',
})
export abstract class CacheService<TItem> {
  abstract seconds: number;

  constructor(@Inject(STORAGE_KEY) public storageKey: string) {
    this.deleteExpiriedDate()
  }

  setData(data: TItem[]) {
    const transformLocalStorage = data.map((value)=> this.transformLocalStorage(value, 1))
    localStorage.setItem(this.storageKey, JSON.stringify(transformLocalStorage));
  }

  addData(data: TItem, key: string | number) {
    const currentValue = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    localStorage.setItem(this.storageKey, JSON.stringify([...currentValue, this.transformLocalStorage(data, key)]));
  }

  getData(): ValueWithExpiry<TItem>[] {
    return JSON.parse(localStorage.getItem(this.storageKey)) ?? [];
  }

  getItemValue(key: string): TItem {
    return this.getData()?.find((expiration) => expiration.key === key)?.value;
  }

  getNoExpirationItem(key: string): TItem {
    return this.getData().find((value) => value.key === key && this.validDate(value.expiration))?.value;
  }

  private validDate(expiration: number): boolean {
    return expiration > new Date().getTime();
  }

  private transformLocalStorage(value:TItem, key: string | number): ValueWithExpiry<TItem> {
    return {
      key,
      value,
      expiration: new Date().getTime() + this.seconds,
    }
  }

  private deleteExpiriedDate(): void {
    const validDate = this.getData().filter((value) => this.validDate(value.expiration));
    localStorage.setItem(this.storageKey, JSON.stringify(validDate));
  }
}
