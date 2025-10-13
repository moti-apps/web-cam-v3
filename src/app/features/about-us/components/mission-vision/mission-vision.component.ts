import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-mission-vision',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './mission-vision.component.html',
  styleUrls: ['./mission-vision.component.scss'],
})
export class MissionVisionComponent {}
