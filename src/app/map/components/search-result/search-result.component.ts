import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/place.service';
import { Feature } from '../../interfaces/places.interface';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public selectedid = " ";

  get isLoadinPlaces(){
    return this.placesService.isLoadingPlaces;
  }

  constructor(
    private placesService : PlacesService,
    private mapService : MapService
  ) { 
    console.log(this.places.length)
  }

  ngOnInit(): void {
  }

  get places() : Feature[]{
    return this.placesService.places;
  }

  flyto(place : Feature){
    this.selectedid = place.id;
    const [ lng , lat ] = place.center; 
    this.mapService.flyto([lng,lat]);
  }

  getDirection(place : Feature){
    
    if(!this.placesService.userLocation) throw Error("No hay userlocation");

    this.placesService.deletePlaces();

    const start = this.placesService.userLocation;
    const end = place.center as [number,number];

    this.mapService.getRouteBetweenPoints(start,end)

  }

}
