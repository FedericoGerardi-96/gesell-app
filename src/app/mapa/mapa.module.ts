import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './pages/map-screen/map-screen.component';
import { MapRoutingModule } from './map-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from '../shared/loading/loading.component';
import { MaterialModule } from '../material/material.module';
import { CardMapInfoComponent } from './components/card-map-info/card-map-info.component';
import { FeaturedLocationsComponent } from './components/featured-locations/featured-locations.component';

@NgModule({
  declarations: [MapScreenComponent, MapViewComponent, CardMapInfoComponent, FeaturedLocationsComponent],
  imports: [CommonModule, MapRoutingModule, SharedModule, MaterialModule],
})
export class MapaModule {}
