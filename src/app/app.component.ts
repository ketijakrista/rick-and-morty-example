import { Component, OnInit } from '@angular/core';
import { Theme } from './models/theme.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user = {
    name: 'Ketija',
    age: 78,
  };

  page = 1;

  ngOnInit(): void {
    window.localStorage.setItem('cat', 'is hungry');
    window.localStorage.setItem('user', JSON.stringify(this.user));

    const catInfo = window.localStorage.getItem('cat');
    const userInfo = JSON.parse(window.localStorage.getItem('user') || '');

    // console.log(catInfo);
    // console.log(userInfo);

    window.sessionStorage.setItem('hello', 'world');

    const hello = window.sessionStorage.getItem('hello');

    // console.log(hello);
    // console.log('when not found', window.localStorage.getItem('aaa'));

    window.localStorage.removeItem('cat');

    document.cookie = 'username=ketija; expires=';
  }
}
