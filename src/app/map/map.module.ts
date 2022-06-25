import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MapRoutingModule } from './map-routing.module';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { ListaSucursalesComponent } from './screens/lista-sucursales/lista-sucursales.component';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FityouLogoComponent } from './components/fityou-logo/fityou-logo.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';


@NgModule({
  declarations: [
    MapViewComponent,
    LoadingComponent,
    MapScreenComponent,
    ListaSucursalesComponent,
    MiniMapaComponent,
    FityouLogoComponent,
    SearchBarComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    HttpClientModule
  ]
})
export class MapModule { }
