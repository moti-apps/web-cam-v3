import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FeatureProjectsComponent } from './components/feature-projects/feature-projects.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { ExplorePropertiesComponent } from './components/explore-properties/explore-properties.component';
import { WhatPeopleSayComponent } from './components/what-people-say/what-people-say.component';
import { LocationComponent } from './components/location/location.component';
import { CamComponent } from './components/cam/cam.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FeatureProjectsComponent,
    WhyChooseUsComponent,
    ExplorePropertiesComponent,
    WhatPeopleSayComponent,
    LocationComponent,
    CamComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
