import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CamComponent } from '../home/components/cam/cam.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, CamComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {}
