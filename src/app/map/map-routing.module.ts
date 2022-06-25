import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaSucursalesComponent } from './screens/lista-sucursales/lista-sucursales.component';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';

const routes: Routes = [
  {
    path: '',
    children: [ 
      { path: 'map' , component: MapScreenComponent } , 
      { path: 'sucursal' , component : ListaSucursalesComponent },
      { path: '**' , redirectTo : 'map' } ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
