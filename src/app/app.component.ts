import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from './layout/header/header.component';
import {Color} from '../enums/Color';

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
  }

  checkColor(color: string) {
    return color === Color.BLUE || color === Color.GREEN || color === Color.RED;
  }

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

    const count = currentCount;
    localStorage.setItem(VISIT_COUNT_KEY, JSON.stringify(currentCount + 1));
  }

}
