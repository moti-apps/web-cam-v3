import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgSelectModule, FormsModule, TranslocoModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public headerTabs = [
    {
      text: 'HEADER.ALL',
      isActive: true,
    },
    {
      text: 'HEADER.FOR_SALE',
      isActive: false,
    },
    {
      text: 'HEADER.FOR_RENT',
      isActive: false,
    },
  ];

  public cities = [
    { id: 1, name: 'Cairo' },
    { id: 2, name: 'Alexandria' },
    { id: 3, name: 'Giza' },
    { id: 4, name: 'Luxor' },
  ];

  public selectedCity = this.cities[0]; // default value

  constructor() {}

  onTabClick(index: number) {
    this.headerTabs = this.headerTabs.map((tab, i) => ({
      ...tab,
      isActive: i === index,
    }));
  }
}
