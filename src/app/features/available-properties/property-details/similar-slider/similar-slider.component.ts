import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { PropertiesCard } from '../../../../shared/components/properties-card/properties-card.interface';
import { PropertiesCardComponent } from '../../../../shared/components/properties-card/properties-card.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-similar-slider',
  standalone: true,
  imports: [
    CommonModule,
    PropertiesCardComponent,
    CarouselModule,
    TranslocoModule,
  ],
  templateUrl: './similar-slider.component.html',
  styleUrls: ['./similar-slider.component.scss'],
})
export class SimilarSliderComponent {
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

  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
  constructor() {}

  onCardClick(item: any) {}
}
