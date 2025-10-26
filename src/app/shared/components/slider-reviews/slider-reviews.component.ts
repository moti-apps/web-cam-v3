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
      id: '2000',
      code: 'rev001',
      name: 'أحمد السيد',
      job: 'موظف حكومي',
      description:
        'بصراحة وزارة التضامن بتقوم بدور عظيم في دعم الأسر الأكثر احتياجًا، ربنا يجازيهم كل خير.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      rating: 5,
    },
    {
      id: '2001',
      code: 'rev002',
      name: 'منى عبد الرحمن',
      job: 'معلمة',
      description:
        'شاكرة جدًا لمجهود الوزارة في صرف معاش "تكافل وكرامة" في المواعيد المحددة بدون أي تأخير.',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      rating: 4.5,
    },
    {
      id: '2002',
      code: 'rev003',
      name: 'إسلام محمد',
      job: 'مهندس مدني',
      description:
        'تجربتي مع خدمة الشكاوى في وزارة التضامن كانت ممتازة، تجاوب سريع وتعامل محترم جدًا.',
      image: 'https://randomuser.me/api/portraits/men/14.jpg',
      rating: 5,
    },
    {
      id: '2003',
      code: 'rev004',
      name: 'سارة محمود',
      job: 'طبيبة',
      description:
        'وزارة التضامن فعلاً بتهتم بكبار السن وبتوفر لهم كل سبل الراحة والدعم، شكراً ليكم.',
      image: 'https://randomuser.me/api/portraits/women/29.jpg',
      rating: 4.8,
    },
    {
      id: '2004',
      code: 'rev005',
      name: 'محمد عبد الله',
      job: 'رائد أعمال',
      description:
        'برنامج "حياة كريمة" بقيادة وزارة التضامن فارق جدًا في القرى، تحية كبيرة لكل القائمين عليه.',
      image: 'https://randomuser.me/api/portraits/men/51.jpg',
      rating: 5,
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
