import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PaginaWeb_Equipos';
  tabItems!: MenuItem[];

    ngOnInit() {
      this.fillMenu();
    }
    fillMenu() {
      this.tabItems = [
        {
          label: 'Home',
          //command: () => this.router.navigate(['home']),
          routerLink: 'Home',
        },
        {
          label: 'Equipos',
          //command: () => this.router.navigate(['tab-1']),
          routerLink: 'Equipos',
        },
        {
          label: 'Mis invitaciones',
          routerLink: 'MisInvitaciones',
        },
        {
          label: 'Lista equipos',
          routerLink: 'listaEquipos',
        }

      ];
    }
}
