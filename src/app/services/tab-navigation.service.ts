import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TabNavigationService {
  activeTab = signal('hero');

  setActiveTab(tabId: string): void {
    this.activeTab.set(tabId);
  }
}