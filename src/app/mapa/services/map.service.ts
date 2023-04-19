import { Injectable } from '@angular/core';

import { Map, LngLatLike, LngLatBounds, AnySourceData } from 'mapbox-gl';
import { DirectionsApiClient } from '../api/directionsApiClients';
import { DirectionsResponse, Route } from '../interfaces/directions';
import mapboxgl from 'mapbox-gl';
import { PlacesService } from './places.service';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map?: Map;
  private distance: number = 0;
  private duration: number = 0;

  constructor(
    private _placesService: PlacesService,
    private directionApi: DirectionsApiClient
  ) {}

  get getDistance() {
    return this.distance || null;
  }

  get getDuration() {
    return this.duration || null;
  }

  get isMapReady() {
    return !!this.map;
  }

  setMap(map: Map) {
    this.map = map;
  }

  flyTo(coords: LngLatLike) {
    if (!this.isMapReady) throw Error('El mapa no esta inicializado');

    this.map?.flyTo({
      zoom: 15,
      center: coords,
    });
  }

  getRouteBetwennPoints(start: [number, number], end: [number, number]) {
    this.directionApi
      .get<DirectionsResponse>(`/${start.join(',')};${end.join(',')}`)
      .subscribe((resp) => this.drawPolyline(resp.routes[0]));
  }

  private drawPolyline(route: Route) {
    if (!this.map) throw Error('El mapa no esta inicializado');

    this.distance = route.distance / 1000;
    this.duration = route.duration / 60 / 60;

    const coords = route.geometry.coordinates;

    const [long, lat] = this._placesService.useLocation!;

    const bounds = new mapboxgl.LngLatBounds()
      .extend([long, lat])
      .extend([-56.956501, -37.242951]);

    this.map.fitBounds(bounds, { padding: 100 });

    // Polyline - Rutas
    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: coords,
            },
          },
        ],
      },
    };

    if (this.map.getLayer('RouteString')) {
      this.map.removeLayer('RouteString');
      this.map.removeSource('RouteString');
    }

    this.map?.addSource('RouteString', sourceData);

    this.map?.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': 'black',
        'line-width': 2,
      },
    });
  }
}
