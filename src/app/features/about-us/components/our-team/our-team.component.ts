import { Component } from '@angular/core';
import { PersonCardComponent } from './person-card/person-card.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-our-team',
  standalone: true,
  imports: [PersonCardComponent, TranslocoModule],
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss'],
})
export class OurTeamComponent {}
