import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IvyCarouselModule } from 'angular-responsive-carousel';

import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { HeroComponent } from './components/hero/hero.component';
import { CardDescripcionComponent } from './components/card-descripcion/card-descripcion.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    HeaderComponent,
    HeroComponent,
    CardDescripcionComponent,
    MapComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    IvyCarouselModule,
  ],
})
export class HomeModule {}
