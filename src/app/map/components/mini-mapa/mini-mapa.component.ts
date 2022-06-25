import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapa',
  templateUrl: './mini-mapa.component.html',
  styleUrls: ['./mini-mapa.component.css']
})
export class MiniMapaComponent implements OnInit , AfterViewInit{


  @Input() latlng : [number,number] = [0,0];
  @ViewChild('mapa') mapa : ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const map = new Mapboxgl.Map({
      container: this.mapa.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.latlng, // starting position [lng, lat]
      zoom: 14 // starting zoom
    });
    
    new Mapboxgl.Marker()
      .setLngLat(this.latlng)
      .addTo(map);
  }

  ngOnInit(): void {
  }

}
