import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-find-your-dream',
  standalone: true,
  imports: [RouterModule, TranslocoModule],
  templateUrl: './find-your-dream.component.html',
  styleUrls: ['./find-your-dream.component.scss'],
})
export class FindYourDream {
  constructor(private router: Router, private firestore: Firestore) {}
  hideContent = false;
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        let activeRouters = this.router.url.split('/');

        if (
          (activeRouters.includes('available-properties') &&
            activeRouters.length == 2) ||
          activeRouters.includes('contact-us')
        ) {
          this.hideContent = true;
        } else {
          this.hideContent = false;
        }
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
        },
        (error) => {
          console.error('Error getting location:', error);
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
