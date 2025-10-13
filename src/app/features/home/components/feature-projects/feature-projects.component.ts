import { Component } from '@angular/core';
import { ProjectsCardComponent } from './projects-card/projects-card.component';
import { ProjectCard } from './projects-card/project-card.interface';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-feature-projects',
  standalone: true,
  imports: [ProjectsCardComponent, TranslocoModule],
  templateUrl: './feature-projects.component.html',
  styleUrls: ['./feature-projects.component.scss'],
})
export class FeatureProjectsComponent {
  public featuredProjects: ProjectCard[] = [
    {
      title: 'FEATURE_PROJECTS.FEATURE_PROJECTS',
      description: 'FEATURE_PROJECTS.FEATURE_PROJECTS',
      imageUrl: 'assets/images/villa.png',
      propertiesCount: 7,
    },
    {
      title: 'FEATURE_PROJECTS.PREMIUM_APARTMENTS',
      description: 'FEATURE_PROJECTS.PREMIUM_APARTMENTS',
      imageUrl: 'assets/images/appartment.jpg',
      propertiesCount: 5,
    },
    {
      title: 'FEATURE_PROJECTS.OFFICE_SPACES',
      description: 'FEATURE_PROJECTS.OFFICE_SPACES',
      imageUrl: 'assets/images/office.jfif',
      propertiesCount: 3,
    },
  ];
  constructor() {}
}
