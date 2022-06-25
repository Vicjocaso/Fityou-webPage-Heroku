import { Injectable } from '@angular/core';
import { AnySourceData, LngLatBounds, LngLatLike, Map, Marker, Popup } from 'mapbox-gl';
import { DirectionsApiClients } from '../api';
import { Feature } from '../interfaces/places.interface';
import { DirectionsResponse, Route } from '../interfaces/directions.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  
  private map? : Map;
  private Markers : Marker[] = [];
  
  get isMapReady(){
    return !!this.map;
  }

  constructor(
    private directiosnApi : DirectionsApiClients 
  ) { }

  setMap( map : Map ){
    this.map = map;
  }

  flyto( coords : LngLatLike ){

    if(!this.isMapReady){
      throw new Error("El mapa no ha sido inicializado");
    }
  
    this.map?.flyTo({
      zoom : 14,
      center : coords
    })

  }

  createMarkersfromplaces( places : Feature[] , userLocation : [number,number] ){

    const newMarkers = [];

    if(!this.map){
      throw new Error("El mapa no existe");
    }

    this.Markers.forEach( marker => marker.remove() );

    for(const place of places){

      const [ lng, lat ] = place.center;

      const popup = new Popup()
          .setHTML(`
            <h6> ${ place.text } </h6>
            <span> ${ place.place_name } </span>
          `);
      const newMarker = new Marker()
        .setLngLat([lng,lat])
        .setPopup( popup )
        .addTo( this.map );

      newMarkers.push(newMarker);

    }

    this.Markers = newMarkers;
    
    if( places.length === 0 ) return;

    const bounds = new LngLatBounds();
    bounds.extend(userLocation);
    newMarkers.forEach(marker => bounds.extend(marker.getLngLat()));
    this.map.fitBounds( bounds , {
      padding : 200
    });
  }

  getRouteBetweenPoints( start : [number,number] , end : [number,number] ){

    this.directiosnApi.get<DirectionsResponse>(`/${start.join(",")};${end.join(",")}`)
        .subscribe( resp => {
          console.log( resp );
          console.log( this.drawPolilyne( resp.routes[0] ) );
        })

  }

  drawPolilyne( route : Route ){

    console.log( {kms : route.distance / 1000 , duration : route.duration / 60});

    if(!this.map) throw new Error("El mapa no ha sido inicializado");

    const coords = route.geometry.coordinates;

    const bounds = new LngLatBounds();

    coords.forEach( ([lng,lat]) => {
        bounds.extend( [lng,lat] );
    });

    this.map.fitBounds( bounds , {
      padding : 200
    });

    // polyline
    const sourData : AnySourceData = {
      type : 'geojson',
      data : {
        type: "FeatureCollection",
        features : [
          {
            type : 'Feature',
            properties : {},
            geometry : {
              type:'LineString',
              coordinates : coords
            }
          }
        ]
      }
    }

    if(this.map.getLayer("RouteString")){
      this.map.removeLayer("RouteString");
      this.map.removeSource("RouteString");
    }

    this.map.addSource( 'RouteString' , sourData );

    this.map.addLayer({
      id : 'RouteString',
      type : 'line',
      source : 'RouteString',
      layout : {
        "line-cap" : 'round',
        "line-join" : 'round'
      },
      paint : {
        "line-color" : '#63CDF2',
        "line-width" : 5
      }
    });


  }

}
