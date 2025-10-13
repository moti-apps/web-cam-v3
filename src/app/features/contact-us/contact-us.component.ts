import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MapComponent } from '../../shared/components/map/map.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    MapComponent,
    TranslocoModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  headerItems = [
    {
      title: 'CONTACT_US.EMAIL',
      info: 'info@moonstone.com',
      icon: 'icon-email',
    },
    {
      title: 'CONTACT_US.BUSINESS_HOURS',
      info: 'Mon – Sat | 9:00 AM – 6:00 PM',
      icon: 'icon-head-phone',
    },
    {
      title: 'CONTACT_US.CALL',
      info: '+971 xxx xxx xxx',
      icon: 'icon-phone',
    },
  ];

  public cities = [
    { id: 1, name: 'Cairo' },
    { id: 2, name: 'Alexandria' },
    { id: 3, name: 'Giza' },
    { id: 4, name: 'Luxor' },
  ];
  public selectedCity = this.cities[0];

  constructor() {}
}
