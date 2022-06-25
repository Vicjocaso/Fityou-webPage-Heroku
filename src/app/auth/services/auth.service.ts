import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthResponse } from '../interfaces/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'https://localhost:44384';

  // private baseUrl: string = environment.baseUrl;

  // get user(){
  //   return {...this._user};
  // }

  constructor(private http: HttpClient) { }


  // register(name: string, email: string, password: string){
  //   const url = `${this.baseUrl}/api/login`

  //   const body = {
  //     name,
  //     email,
  //     password
  //   }

  //   return this.http.post<AuthResponse>(url, body)
  //     .pipe(
  //       tap(
  //         resp => {

  //           if(resp.ok){
  //             localStorage.setItem('token', resp.token!)
  //           }

  //         }
  //       ),
  //       map(
  //         resp => resp.ok
  //       ),
  //       catchError(
  //         err => {
  //           return of(err.error.msg)
  //         }
  //       )
  //     )
  // }


  login(username: string, password: string){

    const url = `${this.baseUrl}/api/login`

    const body = {
      username,
      password
    }
    
    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(
          resp => {

            console.log("THIS IS A RESPONSE");
            console.log(resp);
            if(resp.token !== ""){
              console.log(resp);
              localStorage.setItem('token', resp.token)
            }
          }
        ),
        map(
          (resp) => (resp.token !== "")
          
        ),
        catchError(
          err => {
            return of(err.error.msg)
          }
        )
      )
  }

  validateToken(): Observable<boolean>{

    const url: string = `${this.baseUrl}/api/validate`;

    const headers = new HttpHeaders()
      .set('Authorization', ('Bearer ' + localStorage.getItem('token')) || '');
    
    return this.http.get<AuthResponse>(url, {
      headers
    }).pipe(
      map(
        resp => {

          localStorage.setItem('token', resp.token!);

          return true;
        }
      ),
      catchError(
        err => of(false)
      )
    )
    
  }

  logout(){
    localStorage.removeItem('token');


  }

}
