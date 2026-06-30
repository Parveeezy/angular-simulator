import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { Color } from '../enums/Color';
import { Collection } from '../collections';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    this.checkLastVisit()
    this.visitCount()
    this.checkColor('red')
  }

  checkColor(color: string) {
    return color === Color.BLUE || color === Color.GREEN || color === Color.RED;
  }
  collection = new Collection([1, 2, 3, 4, 5, 6]);
  collection2 = new Collection([
    { id: 1, name: 'Styopa', login: 'STEPAN' },
    { id: 2, name: 'Petya', login: 'Petka' },
    { id: 3, name: 'Vasya', login: 'Vasek' }
  ]);

  savedData = localStorage.getItem('data-items')
  data = this.savedData ? JSON.parse(this.savedData) : []
  collection3 = new Collection(this.data);

  lastVisit: string | null = null;

  checkLastVisit() {
    const DATE_KEY = 'LAST_DATE_KEY';
    const now = new Date().toISOString();

    this.lastVisit = localStorage.getItem(DATE_KEY);
    localStorage.setItem(DATE_KEY, now);
  }

  visitCount() {
    const VISIT_COUNT_KEY = 'VISIT_COUNT_KEY';
    const currentCount = parseInt(localStorage.getItem(VISIT_COUNT_KEY) || '0', 10);
    localStorage.setItem(VISIT_COUNT_KEY, JSON.stringify(currentCount + 1));
  }
}
