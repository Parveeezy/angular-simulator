import {Component, OnDestroy, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [DatePipe]
})
export class HeaderComponent implements OnInit, OnDestroy {
  logoImg = '/Logo-img.svg';
  companyName = 'РУМТИБЕТ';
  counter = 0;
  activeView: 'timer' | 'counter' = 'timer';

  currentDate = new Date();
  liveValue = '';
  private intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }

  toggleView(): void {
    this.activeView = this.activeView === 'timer' ? 'counter' : 'timer';
  }
}
