import { Component } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent {
  constructor(private firestore: Firestore) {
    // this.getUserLocation();
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
            name: 'Hossam',
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
  async addUser() {
    const users = collection(this.firestore, 'users');
    await addDoc(users, { name: 'Hossam', createdAt: new Date() });
  }
}
