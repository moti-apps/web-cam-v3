import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: `<div id="map" class="h-[500px] w-full"></div>`, // Tailwind: ارتفاع 500px
  styles: [
    `
      #map {
        width: 100%;
        height: 627px;
        margin-top: 1rem;
        border-radius: 10px;
      }
    `,
  ],
})
export class MapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const map = L.map('map').setView([30.0444, 31.2357], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors',
    }).addTo(map);

    L.marker([30.0444, 31.2357])
      .addTo(map)
      .bindPopup('Hello from Cairo 👋')
      .openPopup();
  }
}
