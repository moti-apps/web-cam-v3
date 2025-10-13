import { Component, Input } from '@angular/core';
import { ProjectCard } from './project-card.interface';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-projects-card',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.scss'],
})
export class ProjectsCardComponent {
  @Input() card: ProjectCard | undefined;

  constructor() {}
}
