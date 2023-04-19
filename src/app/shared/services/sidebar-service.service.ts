import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarServiceService {
  private _isOpen = false;

  get isOpen(): boolean {
    return this._isOpen;
  }

  toggle(): void {
    this._isOpen = !this._isOpen;
  }
  constructor() {}
}
