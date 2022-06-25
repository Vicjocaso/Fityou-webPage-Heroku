import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [],
})
export class NavbarComponent implements OnInit {
  userLoggedIn: boolean = false;

  items: MenuItem[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.validateToken().subscribe((resp) => {
      console.log('Im the RESPONSE:', resp);
      this.userLoggedIn = resp;

      this.items = [
        {
          label: 'Planes',
          icon: 'pi pi-comments',
          items: [
            {
              label: 'Ver planes',
              icon: 'pi pi-bars',
              routerLink: '/plans/all',
            },
            ...(this.userLoggedIn
              ? [
                  {
                    label: 'Agregar',
                    icon: 'pi pi-plus',
                    routerLink: '/plans/add',
                  },
                ]
              : []),
          ],
        },
        {
          label: 'Comparar',
          icon: 'pi pi-briefcase',
          routerLink: '/plans/all',
        },
        {
          label: 'Acerca de',
          icon: 'pi pi-users',
          routerLink: '/plans/about',
        },
        {
          label: 'Compañias',
          icon: 'pi pi-briefcase',
          routerLink: '/plans/company',
        },
        {
          label: 'Mapa',
          icon: 'pi pi-map',
          items: [
            {
              label: 'Buscar',
              icon: 'pi pi-search',
              routerLink: 'map/map',
            },
            {
              label: 'Listado de Sucursales',
              icon: 'pi pi-list',
              routerLink: 'map/sucursal',
            },
          ],
        },
        // ...( this.userLoggedIn ? [{
        //     label:'logout',
        //     icon: 'pi pi-map',
        //     routerLink:'map/map'
        // }]: []),
        // {
        //     label: 'Excel',
        //     icon: 'pi pi-file',
        //     items: [
        //         {
        //             label: 'Internet',
        //             icon: 'pi pi-bars',
        //             routerLink: '/excel/internet'
        //         }
        //     ]
        // },
      ];
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/auth']);
  }

  login() {
    this.router.navigate(['/auth/auth']);
  }
}
