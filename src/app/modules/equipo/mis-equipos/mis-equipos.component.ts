import { Component } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import { RouterModule, Routes } from '@angular/router';
import { MatDialog } from'@angular/material/dialog';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NewTeamComponent } from '../new-team/new-team.component';
import {AuthService} from "../../../services/auth.service";
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/shared/model/equipo';
interface Item {
  Equipo: string;
  Siglas: string;
  id: number;
}

@Component({
  selector: 'app-mis-equipos',
  templateUrl: './mis-equipos.component.html',
  styleUrls: ['./mis-equipos.component.scss']
})
export class MisEquiposComponent {
  equipos: Equipo[] = []
  items: Item[] = [];
  constructor(public dialog: MatDialog,private authService: AuthService,private equipoService: EquipoService){}


ngOnInit(): void {
    const usuarioJSON = localStorage.getItem('currentUser') ?? "";
    const usuario = JSON.parse(usuarioJSON);
    const idUsuario = usuario.id;
    this.equipoService.getEquiposParticipe(idUsuario).subscribe((equipos: Equipo[]) => {
      this.equipos = equipos;
      equipos.forEach(element => {
        var obj = {
          Equipo: element.nombreEquipo,
          Siglas: element.siglas,
          id: element.id
        };
        this.items.push(obj)
      });
    });
  }






  logout(): void {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    location.reload();
    this.authService.logout()
  }
  openDialog(){
   this.dialog.open(NewTeamComponent);
  }

}
