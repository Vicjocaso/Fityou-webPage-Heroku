import { Component, AfterViewInit, OnInit } from '@angular/core';
import { PlacesService } from '../../services';
import { Sucursales } from '../../interfaces/sucursales.interface';
import { Company } from '../../../plans/interfaces/plan.interface';

interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}


@Component({
  selector: 'app-lista-sucursales',
  templateUrl: './lista-sucursales.component.html',
  styleUrls: ['./lista-sucursales.component.css']
})

export class ListaSucursalesComponent implements AfterViewInit, OnInit {

  sucursal : Sucursales[];
  propiedades : Propiedad[];
  pro : Propiedad;
  contador : number = 0;
  Compani : Company[];

  constructor(
    private placeService : PlacesService
  ) { }
  ngOnInit(): void {

    this.propiedades = []
  }

  ngAfterViewInit(): void {
    
    this.placeService.getSucursales().subscribe( sucur => {          
      this.sucursal = sucur;
      
      for(let item of this.sucursal){
       
        const data =[Number(item.Latitude), Number(item.Longitude)] as [number,number];
        this.pro = { lngLat : data, descripcion : item.Id.toString() , titulo : "Claro"};
        this.propiedades.push({...this.pro});
      }


    });

    for(let item of this.sucursal){     
      this.placeService.getCompanyByID(item.CompanyId)
        .subscribe( resp => this.Compani.push(resp[0]));
    }

  }


}
