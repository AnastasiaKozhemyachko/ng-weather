import {Inject, Injectable} from '@angular/core';
import {ValueWithExpiry} from '../value-with-expiry.type';

@Injectable({
  providedIn: 'root',
})
export abstract class CacheService<TItem> {
  protected abstract seconds: number;
  protected abstract storageKey: string;

  constructor() {
    this.deleteExpiriedDate();
  }

  setData(data: TItem[]) {
    const transformLocalStorage = data.map((value)=> this.transformLocalStorage(value, this.storageKey));
    localStorage.setItem(this.storageKey, JSON.stringify(transformLocalStorage));
  }

  addData(data: TItem, key: string | number) {
    let currentValue = JSON.parse(localStorage.getItem(this.storageKey)) || [];
    const index = currentValue.findIndex(item => item.key === key);
    if (index !== -1) {
      currentValue[index] = this.transformLocalStorage(data, key);
    } else {
      currentValue = [...currentValue, this.transformLocalStorage(data, key)];
    }
    localStorage.setItem(this.storageKey, JSON.stringify(currentValue));
  }

  getData(): ValueWithExpiry<TItem>[] {
    return JSON.parse(localStorage.getItem(this.storageKey)) ?? [];
  }

  getItemValue(key: string): TItem {
    return this.getData()?.find((value) => value.key === key)?.value;
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
