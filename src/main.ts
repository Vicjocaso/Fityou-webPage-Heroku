import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import  Mapboxgl  from 'mapbox-gl';

Mapboxgl.accessToken = 'pk.eyJ1Ijoid2FsYXNlIiwiYSI6ImNrenBycXV6ZjBkbW4ydm9heGZrd2E2eWwifQ.96ILgOttK0FZpDYURkGsrQ';

if (environment.production) {
  enableProdMode();
}

if(!navigator.geolocation){
  alert("El navegador no soporta la geolocalizacion");
  console.log("El navegador no soporta Geolocalizacion");
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
