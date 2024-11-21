import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service'

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {

  isDarkMode: boolean=true;

  constructor(private themeService: ThemeService) {
    const storedTheme = localStorage.getItem('isDarkMode');

    this.isDarkMode = storedTheme=== 'false';
  }
  ngOnInit(): void {
      this.isDarkMode = this.themeService.isDarkMode();

    this.applyTheme();
  }
 

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('isDarkMode', this.isDarkMode.toString());
    const isDarkMode = !this.themeService.isDarkMode();
    this.themeService.setDarkMode(isDarkMode);
    this.applyTheme();
  }

  private applyTheme(): void {
    const darkMode = this.themeService.isDarkMode();
    if (darkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }


 

  // constructor(private themeService: ThemeService) {
  //   this.isDarkMode = this.themeService.isDarkMode();
  // }

  // toggleTheme() {
  //   this.isDarkMode = !this.isDarkMode;
  //   this.themeService.setDarkMode(this.isDarkMode);
  // }
}
