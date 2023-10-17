import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor() {}

  public setState<T>(key: string, value?: T): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  public getState<T>(key: string): T {
    return JSON.parse(sessionStorage.getItem(key) as any);
  }

  public destroy(key: string): void {
    sessionStorage.removeItem(key);
  }
}
