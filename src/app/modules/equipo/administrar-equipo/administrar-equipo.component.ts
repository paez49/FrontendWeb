import { Component, OnInit, Inject } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { MatCardModule } from '@angular/material/card';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
import { AuthService } from 'src/app/services/auth.service';
import { EquipoService } from 'src/app/services/equipo.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import { Solicitud } from 'src/app/shared/model/solicitud';
import { Usuario } from 'src/app/shared/model/usuario';
import { InvitationService } from 'src/app/services/invitation.service';
import { Invitacion } from 'src/app/shared/model/invitacion';
import { Equipo } from 'src/app/shared/model/equipo';

const moment = _moment;
export interface Item {
  username: string;
  email: string;
  id: number;
}
@Component({
  selector: 'app-my-component',
  templateUrl: './administrar-equipo.component.html',
  styleUrls: ['./administrar-equipo.component.scss']
})
export class AdministrarEquipoComponent implements OnInit {
  constructor(private solicitudService: SolicitudService, private authService: AuthService, private equipoService: EquipoService, private router: Router, private usuarioService: UsuarioService, private invitacionService: InvitationService) { }
  users: Usuario[] = [];
  solicitudes: Solicitud[] = [];
  date = new FormControl(moment([2017, 0, 1]));
  date7: Date | undefined
  items: Item[] = [];
  displayedColumns: string[] = ['username', 'email','id', 'select'];
  displayedColumnsUser: string[] = ['username', 'email','id', 'select'];
  dataSource!: MatTableDataSource<Item>;
  dataSourceUsuarios!: MatTableDataSource<Item>;
  selection = new SelectionModel<Item>(true, []);
  ngOnInit(): void {
    const equipoId = localStorage.getItem('equipoId');
    const equipoNombre = localStorage.getItem('equipoNombre');
    const equipoSigla = localStorage.getItem('equipoSigla');

    const equipoNombreInput = document.getElementById('nombreEquipo') as HTMLInputElement;
    const equipoSiglaInput = document.getElementById('siglas') as HTMLInputElement;

    equipoNombreInput.placeholder = equipoNombre ?? '';
    equipoSiglaInput.placeholder = equipoSigla ?? '';

    if (equipoId) {
      this.solicitudService.getSolicitudes(parseInt(equipoId)).subscribe((solicitudes) => {
        this.solicitudes = solicitudes;
        solicitudes.forEach(Element => {
          var obj = {
            username: Element.usuario.username,
            email: Element.usuario.email,
            id: Element.usuario.id
          }
          this.items.push(obj);
        })

        this.dataSource = new MatTableDataSource<Item>(this.items);
      })
    }

    if (equipoId) {
      this.usuarioService.getUsuariosNoEnEquipo(parseInt(equipoId)).subscribe((users: Usuario[]) => {
        this.users = users;
        users.forEach((element: Usuario) => {
          var obj = {
            username: element.username,
            email: element.email,
            id: element.id
          }
          this.items.push(obj);
        });

        this.dataSourceUsuarios = new MatTableDataSource<Item>(this.items);
      });
    }


  }


  // Implementa el método para seleccionar/deseleccionar todos los items
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  // Implementa el método para verificar si todos los items están seleccionados
  // Implementa el método para verificar si todos los items están seleccionados
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  eliminarEquipo() {
    const equipoId = localStorage.getItem('equipoId');

    if (equipoId) {
      const idEquipo = parseInt(equipoId, 10); // Convertir a número entero

      if (!isNaN(idEquipo)) {
        this.equipoService.deleteEquipo(idEquipo).subscribe(
          () => {
            this.router.navigate(['/Equipos']);
          },
          (error) => {
          }
        );
      } else {
        console.error('El ID del equipo no es válido');
      }
    } else {
      console.error('No se encontró el ID del equipo');
    }
  }


  guardarEquipo()
  {
    const equipoNombreInput = document.getElementById('nombreEquipo') as HTMLInputElement;
    const equipoSiglaInput = document.getElementById('siglas') as HTMLInputElement;

    const nombreEquipo = equipoNombreInput.value;
    const siglas = equipoSiglaInput.value;
    const equipoId = localStorage.getItem('equipoId');

    if( equipoId != null){
      const Team  =
      {
      id :  Number(equipoId),
      nombreEquipo : (nombreEquipo),
      siglas : (siglas)
        }
      this.equipoService.actualizarEquipo(Number(equipoId),Team).subscribe(
        () => {
          this.router.navigate(['/Equipos']);
        },
        (error) => {
        }
      );
}
  }
  onAceptar() {

    const equipoNombreInput = document.getElementById('nombreEquipo') as HTMLInputElement;
    const equipoSiglaInput = document.getElementById('siglas') as HTMLInputElement;

    const nombreEquipo = equipoNombreInput.value;
    const siglas = equipoSiglaInput.value;
    const equipoId = localStorage.getItem('equipoId');
    if (this.selection.selected.length === this.dataSource.data.length) {
      console.log('Aceptado para todos los elementos seleccionados:');
      this.selection.selected.forEach((row) => console.log(row.username));
    } else {
      this.selection.selected.forEach(element => {
        console.log(`Aceptado: ${element.username}`);
        if( equipoId != null){
          const Team  = new Equipo()
          Team.id = Number(equipoId)
          Team.nombreEquipo = nombreEquipo;
          Team.siglas = siglas

          const User  = new Usuario()
          User.id = element.id
          User.email = element.email
          User.username = element.username

          const inv = new Invitacion()

          inv.equipo = Team
          inv.usuario = User

            console.log(Team)
          this.invitacionService.acceptInvitation(inv).subscribe(
            (a : any) => {
              console.log(a);
            },
            (error) => {
            }
          )


    }

      });
    }
  }
  onInvitar() {
    if (this.selection.selected.length === this.dataSource.data.length) {
      console.log('Invitados todos los elementos seleccionados:');
      this.selection.selected.forEach((row) => console.log(row.username));
    } else {
      this.selection.selected.forEach(element => {
        console.log(`Invitado: ${element.username}`);
      });
    }
  }
  onRechazar() {
    if (this.selection.selected.length === this.dataSource.data.length) {
      console.log('Rechazado para todos los elementos seleccionados:');
      this.selection.selected.forEach((row) => console.log(row.username));
    } else {
      this.selection.selected.forEach(element => {
        console.log(`Rechazado: ${element.username}`);
      });

    }
  }
}

