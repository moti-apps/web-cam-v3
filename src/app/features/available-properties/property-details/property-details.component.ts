import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderReview } from '../../../shared/components/slider-reviews/slider-reviews.component';
import { MapComponent } from '../../../shared/components/map/map.component';
import { SimilarSliderComponent } from './similar-slider/similar-slider.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [
    CommonModule,
    SliderReview,
    MapComponent,
    SimilarSliderComponent,
    TranslocoModule,
  ],
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss'],
})
export class PropertyDetailsComponent {
  previewSrc =
    'https://minde-appartment.hotelsofnorway.com/data/Photos/OriginalPhoto/5451/545164/545164542/photo-minde-appartment-bergen-1.JPEG';
  thumbnails = [
    'https://minde-appartment.hotelsofnorway.com/data/Photos/OriginalPhoto/5451/545164/545164542/photo-minde-appartment-bergen-1.JPEG',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/631183561.jpg?k=61b2665e3bd73613bb7bf2f5512cab3d355479792f768edeb03443c752a08323&o=&hp=1',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/459671900.jpg?k=920d5f127949d18e052d5301e86640c2cac8ed773caab9c8c89a7c96e31e4490&o=&hp=1',
  ];

  AmenitiesFeatures = [
    {
      icon: 'icon-cutlery',
      text: 'PROPERTIES.KITCHEN',
    },
    {
      icon: 'icon-air-conditioner',
      text: 'PROPERTIES.AIR_CONDITIONING',
    },
    {
      icon: 'icon-bathtub',
      text: 'PROPERTIES.BATHTUB',
    },
    {
      icon: 'icon-extinguisher',
      text: 'PROPERTIES.FIRE_EXTINGUISHER',
    },
    {
      icon: 'icon-cctv',
      text: 'PROPERTIES.CIRCULAR_TV',
    },
    {
      icon: 'icon-wifi-signal',
      text: 'PROPERTIES.WI_FI',
    },
  ];

  constructor() {}

  onThumbnilClick(thumbnil: string) {
    this.previewSrc = thumbnil;
  }
}
