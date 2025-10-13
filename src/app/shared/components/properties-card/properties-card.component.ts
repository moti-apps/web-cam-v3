import { Component, Input } from '@angular/core';
import { PropertiesCard } from './properties-card.interface';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-properties-card',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './properties-card.component.html',
  styleUrls: ['./properties-card.component.scss'],
})
export class PropertiesCardComponent {
  @Input() card: PropertiesCard | undefined;
  @Input() isClassic = false;
  constructor() {}
}
