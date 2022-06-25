import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit , AfterViewInit {


  @ViewChild("mapdiv") mapDivElement! : ElementRef;

  constructor(
    private placeService : PlacesService,
    private mapService : MapService
  ) { }

  ngAfterViewInit(): void {
    
    if(!this.placeService.userLocation){
      alert("No se puede obtener la localizacion de este usuario");
    }

    const map = new Map({
      container: this.mapDivElement.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placeService.userLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
    });

    const poput = new Popup()
      .setHTML(`
        <h6>Usuario de FITYOU</h6>
        <span>Estas en esta parte de RD</span>
      `);
    
    new Marker({color:'red'})  
      .setLngLat(this.placeService.userLocation!)
      .setPopup(poput)
      .addTo(map);

    this.mapService.setMap(map);

  }

  ngOnInit(): void {


  }

}
