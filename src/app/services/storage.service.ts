import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  get_item(key: string): string | null {
    return localStorage.getItem(key)
  }

  set_item(key: string, value: any): void {
    return localStorage.setItem(key, JSON.stringify(value))
  }
}

