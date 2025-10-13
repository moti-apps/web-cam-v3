import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { SliderReview } from '../../../../shared/components/slider-reviews/slider-reviews.component';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-what-people-say',
  standalone: true,
  imports: [CommonModule, CarouselModule, SliderReview, TranslocoModule],
  templateUrl: './what-people-say.component.html',
  styleUrls: ['./what-people-say.component.scss'],
})
export class WhatPeopleSayComponent {
  constructor() {}
}
