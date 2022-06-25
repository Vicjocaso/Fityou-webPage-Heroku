import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FitYouApp';

  get isInAuth(): boolean{

    return this.router.url.includes('auth');
  }

  constructor(  private primengConfig: PrimeNGConfig,
                private router: Router){

  }

  ngOnInit(){
    this.primengConfig.ripple = true;
  }
}
