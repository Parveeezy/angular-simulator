import {Component, ElementRef, ViewChild} from '@angular/core';
import {HikeComponent} from '../hike.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: "app-hero",
  templateUrl: './hero.component.html',
  imports: [
    HikeComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  styleUrl: "./hero.component.scss"
})
export class HeroComponent {
  hero = '/Hero-img.jpg';
  arrow = '/arrow-icon.svg'
  calendar = '/calendar.svg';

  inputType: 'text' | 'date' = 'text';
  dateControl = new FormControl('');

  @ViewChild('dateInput') dateInputRef!: ElementRef<HTMLInputElement>;

  onClick(): void {
    const input = this.dateInputRef.nativeElement;
    input.type = 'date';
    input.readOnly = false;
    this.inputType = 'date';

    input.showPicker?.();
  }

  onBlur(): void {
    if (!this.dateControl.value) {
      this.inputType = 'text';
    }
  }

  protected readonly onclick = onclick;
}
