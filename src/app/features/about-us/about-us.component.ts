import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OurStoryComponent } from './components/our-story/our-story.component';
import { MissionVisionComponent } from './components/mission-vision/mission-vision.component';
import { WhyChooseUsComponent } from '../home/components/why-choose-us/why-choose-us.component';
import { OurTeamComponent } from './components/our-team/our-team.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    OurStoryComponent,
    MissionVisionComponent,
    WhyChooseUsComponent,
    OurTeamComponent,
  ],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {}
