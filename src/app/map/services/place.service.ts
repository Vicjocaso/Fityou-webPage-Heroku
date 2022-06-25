
import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { placesApiClient } from '../api';
import { PlacesResponse, Feature } from '../interfaces/places.interface';
import { HttpClient } from '@angular/common/http';
import { Sucursales } from '../interfaces/sucursales.interface';
import { Observable } from 'rxjs';
import { Company } from '../../plans/interfaces/plan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  public userLocation? : [number, number];
  public isLoadingPlaces : boolean = false;
  public places : Feature[] = [];

  get iduserLocationReady() : boolean{
    return !!this.userLocation;
  }

  constructor( 
    private placesApi : placesApiClient ,
    private mapservice : MapService,
    private http : HttpClient
    ) { 
    this.getUserLocation();
  }


  public async getUserLocation() : Promise<[number,number]>{

    return new Promise( (resolve , reject) => {

      navigator.geolocation.getCurrentPosition( ( {coords} ) => {
        this.userLocation = [ coords.longitude , coords.latitude ];
        resolve( this.userLocation );
      },
      error => {
        alert("No se pudo obtener la geolocalizacion");
        console.log(error);
        reject();
      });

    } )


  }

  getplacesbyQuery( query : string = '' ){
    

    if(query.length === 0){
      this.isLoadingPlaces === false;
      this.places = [];
      return;
    }

    this.isLoadingPlaces = true;

    if(!this.userLocation) throw new Error("No hay userlocation");

    this.placesApi.get<PlacesResponse>(`/${query}.json`, { 
      params : {
        proximity : this.userLocation.join(",")
      }
    }).subscribe( resp => {
        console.log(resp);
        this.isLoadingPlaces = false;
        this.places = resp.features;
        this.mapservice.createMarkersfromplaces(this.places,this.userLocation!);
    });
        
  }

  deletePlaces(){
    this.places = [];
  }

  getSucursales() : Observable<Sucursales[]> {
    return this.http.get<Sucursales[]>("https://localhost:44384/api/GetOffices");
  }

  getCompanyByID(id : number) : Observable<Company[]>{
    return this.http.get<Company[]>(`https://localhost:44384/api/getCompanyById/${id}`);
  }

  // getPlacesByQuery(query : string){
  //   this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?country=do&proximity=-70.61676567160748%2C19.029725132227398&language=es%2Cen&access_token=pk.eyJ1Ijoid2FsYXNlIiwiYSI6ImNrenBycXV6ZjBkbW4ydm9heGZrd2E2eWwifQ.96ILgOttK0FZpDYURkGsrQ`)
  //                 .subscribe(console.log);
    
  // }

}
