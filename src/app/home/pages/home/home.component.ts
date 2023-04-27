import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/auth/services/user.service';
import { PlacesService } from 'src/app/mapa/services/places.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private placesService: PlacesService,
    private userSerevices: UserService,
  ) {}

  ngOnInit(): void {
    // this.userSerevices.setLogUser();
  }

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }
}
