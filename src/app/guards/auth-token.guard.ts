import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenGuard implements CanActivate, CanLoad {

  constructor(  private authService: AuthService,
                private router: Router ){}

  canActivate(): Observable<boolean> | boolean {
    return this.authService.validateToken()
      .pipe(
        tap(
          valid => {

            console.log("first")
            if(!valid){
              this.router.navigateByUrl('/auth/auth')
            }
            return valid;
          }
        )
      )
  }
  canLoad(): Observable<boolean> | boolean {
    return this.authService.validateToken()
    .pipe(
      tap(
        valid => {
          if(!valid){
            this.router.navigateByUrl('/auth/auth')
          }
          return valid;
        }
      )
    )
  }
}
