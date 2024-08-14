import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardBackComponent } from './card-back/card-back.component';
import { CardFrontComponent } from './card-front/card-front.component';
import { CardFormComponent } from './card-form/card-form.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardBackComponent,
    CardFrontComponent,
    CardFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public form = new FormGroup({
    number: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.pattern(/^[0-9]*$/),
    ]),
    name: new FormControl('', [Validators.required]),
    month: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
    cvc: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
      Validators.pattern(/^[0-9]*$/),
    ]),
  });

  get number(): string {
    const defaultCardNumber = '0000 0000 0000 0000';
    const formattedCardNumber = this.form
      .get('number')
      ?.value?.split('')
      .map((char, index) => {
        return index % 4 === 0 ? ` ${char}` : char;
      })
      .join('');
    return formattedCardNumber || defaultCardNumber;
  }

  get name() {
    return this.form.get('name')?.value || 'Jane Appleseed';
  }

  get month() {
    return Number(this.form.get('month')?.value) || 0;
  }

  get year() {
    return Number(this.form.get('year')?.value) || 0;
  }

  get cvc() {
    return Number(this.form.get('cvc')?.value) || 0;
  }
}
