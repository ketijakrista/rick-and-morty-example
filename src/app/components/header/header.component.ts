import { Component, OnInit } from '@angular/core';

import { Theme } from '../../models/theme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDarkTheme = false;

  constructor() {}

  ngOnInit(): void {
    const theme = window.localStorage.getItem('theme') as Theme;

    if (theme) {
      document.body.classList.add(theme);
      this.isDarkTheme = theme === Theme.DARK;
    } else {
      window.localStorage.setItem('theme', Theme.LIGHT);
      document.body.classList.add(Theme.LIGHT);
    }
  }

  toggleTheme(checked: boolean): void {
    console.log(checked);

    const theme = checked ? Theme.DARK : Theme.LIGHT;

    window.localStorage.setItem('theme', theme);
    // document.body.classList.add(theme);
    document.body.classList.toggle(Theme.LIGHT);
    document.body.classList.toggle(Theme.DARK);
  }
}
