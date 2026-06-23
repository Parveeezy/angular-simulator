import {Component, OnInit} from '@angular/core';
import {sum, filterUsers, users, formatString} from './training';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(sum(2, 3))
    console.log(filterUsers(users, 'Marvel'))
    console.log(formatString('stroka', 'capitalize'))
  }
}
