import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: []
})

export class HeaderComponent {
  logoImg = '/Logo-img.svg'
  companyName = 'РУМТИБЕТ'
}
