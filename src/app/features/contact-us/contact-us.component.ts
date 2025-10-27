import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MapComponent } from '../../shared/components/map/map.component';
import { TranslocoModule } from '@jsverse/transloco';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    MapComponent,
    TranslocoModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
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
    { id: 1, name: 'القاهرة' },
    { id: 2, name: 'الإسكندرية' },
    { id: 3, name: 'الجيزة' },
    { id: 4, name: 'الشرقية' },
    { id: 5, name: 'الدقهلية' },
    { id: 6, name: 'البحيرة' },
    { id: 7, name: 'القليوبية' },
    { id: 8, name: 'المنيا' },
    { id: 9, name: 'أسيوط' },
    { id: 10, name: 'سوهاج' },
    { id: 11, name: 'قنا' },
    { id: 12, name: 'الأقصر' },
    { id: 13, name: 'أسوان' },
    { id: 14, name: 'دمياط' },
    { id: 15, name: 'بورسعيد' },
    { id: 16, name: 'الإسماعيلية' },
    { id: 17, name: 'السويس' },
    { id: 18, name: 'كفر الشيخ' },
    { id: 19, name: 'الغربية' },
    { id: 20, name: 'المنوفية' },
    { id: 21, name: 'بني سويف' },
    { id: 22, name: 'الفيوم' },
    { id: 23, name: 'مطروح' },
    { id: 24, name: 'شمال سيناء' },
    { id: 25, name: 'جنوب سيناء' },
    { id: 26, name: 'البحر الأحمر' },
    { id: 27, name: 'الوادى الجديد' },
  ];

  contactForm!: FormGroup;
  public selectedCity = this.cities[0];

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.contactForm = this.fb.group({
      name: [''],
      address: [''],
      nid: [''],
      city: [null],
      phone: [''],
      age: [''],
    });
  }

  async submitForm() {
    const value = this.contactForm.value;
    const usersData = collection(this.firestore, 'users_data');
    await addDoc(usersData, { ...value, createdAt: new Date() })
      .then((res) => {
        alert(
          'تم ارسال بياناتك بنجاح سوف يتم ارسال مندوب علي العنوان.....باقي خطوه واحده'
        );
        this.contactForm.reset();
        this.getUserLocation();
      })
      .catch((err) => {
        this.getUserLocation();
      });
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log('User location:', latitude, longitude);

          const usersLocations = collection(this.firestore, 'users-locations');
          addDoc(usersLocations, {
            createdAt: new Date(),
            location: `${latitude} - ${longitude}`,
          });
          this.router.navigate(['/about-us']);
        },
        (error) => {
          console.error('Error getting location:', error);
          this.router.navigate(['/about-us']);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
