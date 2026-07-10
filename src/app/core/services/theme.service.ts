import { effect, Injectable, signal } from '@angular/core';

const STORAGE_KEY = '@ocondedev/storage';

interface StoredPrefs {
  lightMode: boolean;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly light = signal(this.initialValue());

  constructor() {
    effect(() => {
      const light = this.light();
      document.documentElement.classList.toggle('light', light);
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ lightMode: light } satisfies StoredPrefs));
    });
  }

  toggle() {
    this.light.update((value) => !value);
  }

  private initialValue(): boolean {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return Boolean((JSON.parse(stored) as StoredPrefs).lightMode);
      }
    } catch {
      // storage indisponível ou corrompido: cai no matchMedia
    }
    return window.matchMedia('(prefers-color-scheme: light)').matches;
  }
}
