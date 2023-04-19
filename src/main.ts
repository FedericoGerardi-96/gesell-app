import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

import 'hammerjs';

import mapboxgl from 'mapbox-gl';

import { environment } from './environments/environment';

mapboxgl.accessToken = environment.mapBoxToken;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
