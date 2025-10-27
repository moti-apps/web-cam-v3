import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { WhatPeopleSayComponent } from './components/what-people-say/what-people-say.component';
import { LocationComponent } from './components/location/location.component';
import { CamComponent } from './components/cam/cam.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { FindYourDream } from '../../shared/components/find-your-dream/find-your-dream.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    WhatPeopleSayComponent,
    ContactUsComponent,
    FooterComponent,
    FindYourDream,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
