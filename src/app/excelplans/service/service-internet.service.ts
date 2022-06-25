import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceInternetService {

  constructor(
    private http : HttpClient
  ) { }

  

}
