import { CommonModule, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, NgClass, ReactiveFormsModule],
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFormComponent {
  cardForm = input.required<FormGroup>();
  formSubmitted = false;

  get number() {
    return this.cardForm().get('number');
  }

  get name() {
    return this.cardForm().get('name');
  }

  get month() {
    return this.cardForm().get('month');
  }

  get year() {
    return this.cardForm().get('year');
  }

  get cvc() {
    return this.cardForm().get('cvc');
  }

  get isInvalid() {
    return {
      number:
        this.number?.invalid && (this.number?.dirty || this.number?.touched),
      name: this.name?.invalid && (this.name?.dirty || this.name?.touched),
      month: this.month?.invalid && (this.month?.dirty || this.month?.touched),
      year: this.year?.invalid && (this.year?.dirty || this.year?.touched),
      cvc: this.cvc?.invalid && (this.cvc?.dirty || this.cvc?.touched),
    };
  }

  public submitForm(): void {
    if (this.cardForm().valid) {
      this.formSubmitted = true;
    }
  }

  public clearFormAndReset(): void {
    this.cardForm().reset();
    this.formSubmitted = false;
  }
}
