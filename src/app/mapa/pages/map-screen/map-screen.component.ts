import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/auth/services/user.service';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css'],
})
export class MapScreenComponent implements OnInit {
  constructor(
    private _placesService: PlacesService,
    private _mapService: MapService,
    private _userSerevices: UserService
  ) {}

  ngOnInit(): void {
    // this._userSerevices.setLogUser();
  }

  infoMapReady: boolean = false;

  get isUserLocationReady() {
    return this._placesService.isUserLocationReady;
  }

  get getDistance(): number | null {
    return this._mapService.getDistance;
  }

  get getDuration(): number | null {
    return this._mapService.getDuration;
  }

  goToMyUbication() {
    this._mapService.flyTo(this._placesService.useLocation!);
  }
  goToMyCabin() {
    this._mapService.flyTo([-56.956501, -37.242951]);
  }

  getDirections() {
    if (!this._placesService.useLocation)
      throw new Error('No hay ubicación del usuario');

    const start = this._placesService.useLocation;
    const end = [-56.956501, -37.242951] as [number, number];

    this._mapService.getRouteBetwennPoints(start, end);
    this.infoMapReady = true;
  }
}
