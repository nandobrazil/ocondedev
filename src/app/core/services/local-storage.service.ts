import {Injectable} from '@angular/core';
import {IStorageKeys} from '../interfaces/IStorageKeys';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly STORAGE_KEY = '@ocondedev/storage';
  private storageKeys: IStorageKeys = this.getStorage();

  toggleTheme(light: boolean) {
    this.storageKeys.lightMode = light;
    document.documentElement.classList.toggle('light', light);
    this.setStorage(this.storageKeys);
  }

  getStorage(): IStorageKeys {
    const storageKeys = localStorage.getItem(this.STORAGE_KEY) as string;
    if (storageKeys) return JSON.parse(storageKeys);
    this.setStorage(this.newStorageKeys());
    return this.storageKeys;
  }

  private setStorage(storageKeys: IStorageKeys) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(storageKeys));
    this.storageKeys = storageKeys;
  }

  private newStorageKeys(): IStorageKeys {
    return {
      lightMode: false,
    }
  }
}
