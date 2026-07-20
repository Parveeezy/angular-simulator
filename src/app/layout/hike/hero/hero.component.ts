import {Component} from '@angular/core';
import {HikeComponent} from '../hike.component';

@Component({
  selector: "app-hero",
  templateUrl: './hero.component.html',
  imports: [
    HikeComponent
  ],
  styleUrl: "./hero.component.scss"
})

export class HeroComponent {
  hero = '/Hero-img.jpg'
}
