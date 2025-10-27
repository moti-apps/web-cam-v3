import { getDocs, collection } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'user-images',
  standalone: true,
  imports: [],
  templateUrl: './user-images.component.html',
  styleUrls: ['./user-images.component.scss'],
})
export class UserImagesComponent implements OnInit {
  userImages: string[] = [];
  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    this.fetchImages();
  }

  // Fetch all images
  fetchImages() {
    const usersImgCollection = collection(this.firestore, 'userImg');
    return getDocs(usersImgCollection)
      .then((querySnapshot) => {
        const images = querySnapshot.docs.map((doc) => doc.data());
        console.log('Fetched Images:', images);
        images.forEach((ele) => {
          this.userImages.push(ele['userImg']);
        });

        return images; // returns an array of image data
      })
      .catch((err) => {
        console.error('Error fetching images:', err);
        throw err;
      });
  }
}
