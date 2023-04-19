import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// gallery
import { NgxMasonryModule } from 'ngx-masonry';
// carousel
// import { IvyCarouselModule } from 'angular-responsive-carousel';
// calendar
import { FullCalendarModule } from '@fullcalendar/angular';
//sweetalert2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import {
  AngularFirestore,
  AngularFirestoreModule,
} from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';

import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { CalendaryModule } from './calendar/calendar.module';
import { MapaModule } from './mapa/mapa.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';
import { MaterialModule } from './material/material.module';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // angular modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // Firebase modules
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // External modules
    BrowserAnimationsModule,
    NgxMasonryModule,
    FullCalendarModule,
    // IvyCarouselModule,
    SweetAlert2Module.forRoot(),
    // modulos internos
    AdminModule,
    AuthModule,
    CalendaryModule,
    MapaModule,
    SharedModule,
    MaterialModule,
  ],
  providers: [
    AngularFirestore,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
