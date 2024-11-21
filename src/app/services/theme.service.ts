import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  private darkModeKey = 'darkMode';

  isDarkMode(): boolean {
    return localStorage.getItem(this.darkModeKey) === 'true';
  }

  setDarkMode(isDarkMode: boolean): void {
    localStorage.setItem(this.darkModeKey, isDarkMode.toString());
  }




  
  // private darkMode = false;

  // isDarkMode() {
  //   return this.darkMode;
  // }

  // setDarkMode(isDarkMode: boolean) {
  //   this.darkMode = isDarkMode;
  //   if (isDarkMode) {
  //     document.body.classList.add('dark-theme');
  //   } else {
  //     document.body.classList.remove('dark-theme');
  //   }
  // }
}