import { Component } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-mappe',
  templateUrl: './mappe.component.html',
  styleUrls: ['./mappe.component.css']
})
export class MappeComponent {
  mapOptions: any;
  mapCenter: any;
  mapZoom: number;

  constructor() {
    // Centro della mappa
    this.mapCenter = latLng([51.505, -0.09]); // Modifica con le tue coordinate (latitudine, longitudine)
    this.mapZoom = 13; // Livello di zoom
    this.mapOptions = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
      ],
      zoom: this.mapZoom,
      center: this.mapCenter
    };
  }

  ngOnInit(): void {}
}