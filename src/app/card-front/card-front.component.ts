import { CommonModule, NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
} from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, NgClass],
  selector: 'app-card-front',
  templateUrl: './card-front.component.html',
  styleUrls: ['./card-front.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFrontComponent {
  cardNumber = input<string>('0000 0000 0000 0000');
  name = input<string>('Jane Appleseed');
  expirationMonth = input<number>(0);
  expirationYear = input<number>(0);
}
