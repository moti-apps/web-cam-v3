import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-slider-review',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './slider-reviews.component.html',
  styleUrls: ['./slider-reviews.component.scss'],
})
export class SliderReview {
  peopleSayCards: any[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'perfect choice for the environmentally conscious consumer',
      image:
        'https://primefaces.org/cdn/primeng/images/product/bamboo-watch.jpg',
      price: 65,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Black Watch',
      description: 'a timeless classic that never goes out of style',
      image:
        'https://primefaces.org/cdn/primeng/images/product/black-watch.jpg',
      price: 72,
    },
    {
      id: '1002',
      code: 'zz21cz3c1',
      name: 'Blue Band',
      description: 'a stylish accessory for any outfit',
      image: 'https://primefaces.org/cdn/primeng/images/product/blue-band.jpg',
      price: 70,
    },
    {
      id: '1003',
      code: '244wgerg2',
      name: 'Blue T-Shirt',
      description: 'a comfortable and stylish t-shirt',
      image:
        'https://primefaces.org/cdn/primeng/images/product/blue-t-shirt.jpg',
      price: 45,
    },
  ];

  responsiveOptions: any[] = [
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
}
