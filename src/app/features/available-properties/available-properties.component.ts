import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserImagesComponent } from './user-images/user-images.component';

@Component({
  selector: 'app-available-properties',
  standalone: true,
  imports: [CommonModule, UserImagesComponent],
  templateUrl: './available-properties.component.html',
  styleUrls: ['./available-properties.component.scss'],
})
export class AvailablePropertiesComponent {}
