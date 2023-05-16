import { Component, OnInit, Inject } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { MatCardModule } from '@angular/material/card';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import { Solicitud } from 'src/app/shared/model/solicitud';

const moment = _moment;
export interface Item {
  username: string;
  email: string;
}
@Component({
  selector: 'app-my-component',
  templateUrl: './administrar-equipo.component.html',
  styleUrls: ['./administrar-equipo.component.scss']
})
export class AdministrarEquipoComponent  implements OnInit{
  constructor(private solicitudService: SolicitudService) { }
  solicitudes:Solicitud[] = [];
  date = new FormControl(moment([2017, 0, 1]));
  date7: Date | undefined
  items: Item[] = [];
  displayedColumns: string[] = ['username', 'email', 'select'];
  dataSource!: MatTableDataSource<Item>;
  selection = new SelectionModel<Item>(true, []);
  ngOnInit(): void {
    const IdEquipo = JSON.parse(localStorage.getItem('currentUser')!).equipoId;
    this.solicitudService.getSolicitudes(IdEquipo).subscribe((solicitudes) => {
      this.solicitudes = solicitudes;
      solicitudes.forEach(Element => {
        var obj = {
          username: Element.usuario.username,
          email: Element.usuario.email
        }
        this.items.push(obj);
      })
      this.dataSource = new MatTableDataSource<Item>(this.items);
    })
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

  onAceptar() {
    if (this.selection.selected.length === this.dataSource.data.length) {
      console.log('Aceptado para todos los elementos seleccionados:');
      this.selection.selected.forEach((row) => console.log(row.username));
    } else {
      this.selection.selected.forEach(element => {
        console.log(`Aceptado: ${element.username}`);
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
  onCancelar() {
    this.selection.clear();
  }
}

