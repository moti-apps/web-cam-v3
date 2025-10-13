import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesCardComponent } from '../../shared/components/properties-card/properties-card.component';
import { PropertiesCard } from '../../shared/components/properties-card/properties-card.interface';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';
import { Route, Router } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-available-properties',
  standalone: true,
  imports: [
    CommonModule,
    PropertiesCardComponent,
    PaginatorModule,
    TranslocoModule,
  ],
  templateUrl: './available-properties.component.html',
  styleUrls: ['./available-properties.component.scss'],
})
export class AvailablePropertiesComponent {
  public filterItems = [
    {
      id: 1,
      icon: 'icon-location',
      text: 'PROPERTIES.CITY',
      isActive: true,
    },
    {
      id: 2,
      icon: 'icon-location',
      text: 'PROPERTIES.NEIGHBORHOOD',
      isActive: false,
    },
    {
      id: 3,
      icon: 'icon-home1',
      text: 'PROPERTIES.RESIDENTIAL',
      isActive: false,
    },
    {
      id: 4,
      icon: 'icon-home1',
      text: 'PROPERTIES.COMMERCIAL',
      isActive: false,
    },
    {
      id: 5,
      icon: 'icon-bed',
      text: 'PROPERTIES.ROOM_NUM',
      isActive: false,
    },
    {
      id: 6,
      icon: 'icon-calendar1',
      text: 'PROPERTIES.BOOKING_DATE',
      isActive: false,
    },
    {
      id: 7,
      icon: 'icon-price',
      text: 'PROPERTIES.PRICE',
      isActive: false,
    },
    {
      id: 8,
      icon: 'icon-offer',
      text: 'PROPERTIES.OFFERS',
      isActive: false,
    },
  ];
  public propertiesCards: PropertiesCard[] = [
    {
      id: 1,
      imageUrl: 'https://i.ytimg.com/vi/-6EylAMOK9U/maxresdefault.jpg',
      badge: 'For Sale',
      title: 'Luxury Family Home',
      location: 'Cairo, Egypt',
      price: '$1,200,000',
      beds: 4,
      baths: 3,
      area: 3500,
      garages: 2,
    },
    {
      id: 2,
      imageUrl:
        'https://metricon.imgix.net/images/Blog-and-Socials/Ainslie-25-Elk-Living2-WyndhamVale-vic-edited.jpg?auto=format%2Ccompress&fit=crop&ar=4%3A3&w=1680',
      badge: 'For Rent',
      title: 'Modern Apartment',
      location: 'Alexandria, Egypt',
      price: '$2,500/mo',
      beds: 2,
      baths: 2,
      area: 1200,
      garages: 1,
    },
    {
      id: 3,
      imageUrl:
        'https://images.adsttc.com/media/images/5014/01bd/28ba/0d3b/4500/0b8c/large_jpg/stringio.jpg?1414576505',
      badge: 'For Sale',
      title: 'Cozy Cottage',
      location: 'Giza, Egypt',
      price: '$850,000',
      beds: 3,
      baths: 2,
      area: 1800,
      garages: 2,
    },
    {
      id: 4,
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_q882oqcq34V_HHXhvzK9n8KV3NuC1MuIZw&s',
      badge: 'For Rent',
      title: 'Downtown Loft',
      location: 'Luxor, Egypt',
      price: '$3,200/mo',
      beds: 1,
      baths: 1,
      area: 900,
      garages: 0,
    },
    {
      id: 5,
      imageUrl:
        'https://www.decorpot.com/images/989713951stunning-simple-house-design-ideas-for-every-homeowner.jpg',
      badge: 'For Sale',
      title: 'Spacious Villa',
      location: 'Cairo, Egypt',
      price: '$2,500,000',
      beds: 5,
      baths: 4,
      area: 4500,
      garages: 3,
    },
    {
      id: 6,
      imageUrl:
        'https://www.mcdonaldjoneshomes.com.au/sites/default/files/styles/one_item_block/public/miami-modern-interior-design-style-sovereign-hills.jpg?itok=TJViVUfO',
      badge: 'For Rent',
      title: 'Suburban House',
      location: 'Alexandria, Egypt',
      price: '$2,800/mo',
      beds: 3,
      baths: 2,
      area: 1600,
      garages: 2,
    },
  ];

  first: number = 0;
  rows: number = 10;
  constructor(private router: Router) {}

  onPageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }

  onItemClick(id: number) {
    this.filterItems = this.filterItems.map((ele) => ({
      ...ele,
      isActive: ele.id === id,
    }));
  }

  onClearFilter() {
    this.filterItems = this.filterItems.map((ele) => ({
      ...ele,
      isActive: false,
    }));
  }

  onCardClick(card: PropertiesCard) {
    this.router.navigate([`available-properties/`, card.id]);
  }
}
