import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { IvyCarouselModule } from 'angular-responsive-carousel';

import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { HeroComponent } from './components/hero/hero.component';
import { CardDescripcionComponent } from './components/card-descripcion/card-descripcion.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    HeaderComponent,
    HeroComponent,
    CardDescripcionComponent,
    CardInfoComponent,
    ContactBannerComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
    CarouselModule,
    // IvyCarouselModule,
  ],
})
export class HomeModule {}
