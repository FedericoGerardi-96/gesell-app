import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Map, Popup, Marker } from 'mapbox-gl';

import { PlacesService } from 'src/app/mapa/services/places.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;

  ngAfterViewInit(): void {
    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-56.956501, -37.242951], // starting position [lng, lat]
      zoom: 14,
    });

    const popupGesell = new Popup().setHTML(`
        <h6>Cabañas Chimay</h6>
        <span>Ubicacion de las cabañas</span>
        <img class="w-36 h-36 object-contain" src="../../../../assets/Villa Gesell/IMG_6759.JPEG" alt="Cabaña gesell">
    `);

    new Marker({ color: 'blue' })
      .setLngLat([-56.956501, -37.242951])
      .setPopup(popupGesell)
      .addTo(map);
  }
}
