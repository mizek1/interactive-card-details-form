import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-card-back',
  imports: [CommonModule, NgClass],
  templateUrl: './card-back.component.html',
  styleUrls: ['./card-back.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardBackComponent {
  cvc = input(0);
}
