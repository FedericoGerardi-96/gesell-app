import { Component, OnInit } from '@angular/core';
import { FeaturesFirebaseService } from 'src/app/admin/services/features-firebase.service';
import { Featured } from 'src/app/interfaces/Featured';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-featured-locations',
  templateUrl: './featured-locations.component.html',
  styleUrls: ['./featured-locations.component.css'],
})
export class FeaturedLocationsComponent implements OnInit {
  features: Featured[] = [];

  constructor(
    private _featuresFirebaseService: FeaturesFirebaseService,
    private _mapService: MapService
  ) {}

  ngOnInit(): void {
    this._featuresFirebaseService
      .getFeatures()
      .subscribe((featuresFirebase) => {
        this.features = featuresFirebase;
      });
  }

  goToUbication(feature: Featured) {
    const { coordinates } = feature;
    this._mapService.flyToFeatured([coordinates![1], coordinates![0]]);
  }
}
