import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss'],
})
export class WhyChooseUsComponent {
  featuresList = [
    'WHY_CHOOSE_US.ITEMS.FIRST',
    'WHY_CHOOSE_US.ITEMS.SECOND',
    'WHY_CHOOSE_US.ITEMS.THIRD',
    'WHY_CHOOSE_US.ITEMS.FOURTH',
  ];
  constructor() {}
}
