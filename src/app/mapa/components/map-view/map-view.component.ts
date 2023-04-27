import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { PlacesService } from '../../services/places.service';
import mapboxgl, { Map, Popup, Marker } from 'mapbox-gl';
import { MapService } from '../../services/map.service';
import { FeaturesFirebaseService } from 'src/app/admin/services/features-firebase.service';
import { Featured } from 'src/app/interfaces/Featured';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit, OnInit {
  @ViewChild('mapDiv') mapDivElement!: ElementRef;
  features: Featured[] = [];

  constructor(
    private placesService: PlacesService,
    private mapService: MapService,
    private _featuresFirebaseService: FeaturesFirebaseService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!this.placesService.useLocation)
      throw Error('No se pudo determinar la ubicación');

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-56.956501, -37.242951],
      zoom: 14,
    });

    const popup = new Popup().setHTML(`
        <h6>Aca estoy</h6>
        <span>Mi ubicacion</span>
     `);
    const popupGesell = new Popup().setHTML(`
        <h6>Cabañas Chimay</h6>
        <span>Ubicacion de las cabañas</span>
        <img class="map-image" src="../../../../assets/Villa Gesell/IMG_6759.JPEG" alt="Cabaña gesell">
     `);

    new Marker({ color: 'red' })
      .setLngLat(this.placesService.useLocation)
      .setPopup(popup)
      .addTo(map);

    new Marker({ color: 'blue' })
      .setLngLat([-56.956501, -37.242951])
      .setPopup(popupGesell)
      .addTo(map);

    this._featuresFirebaseService.getFeatures().subscribe((features) => {
      features.forEach((feature) => {
        if (feature.coordinates !== undefined) {
          let marcador = new mapboxgl.Marker({ color: '#ff4081' })
            .setLngLat([feature.coordinates[1], feature.coordinates[0]])
            .addTo(map);
          marcador.setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<h6>${feature.name}</h6>
                <span>${feature.description}</span>`
            )
          );
        }
      });
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
        showUserHeading: true,
      })
    );

    this.mapService.setMap(map);
  }
}
