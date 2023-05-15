import { Component, OnInit, Inject } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FormControl } from '@angular/forms';
import * as _moment from 'moment';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

const moment = _moment;
export interface Item {
  Nombre: string;
  Edad: number;
}
@Component({
  selector: 'app-my-component',
  templateUrl: './administrar-equipo.component.html',
  styleUrls: ['./administrar-equipo.component.scss']
})
export class AdministrarEquipoComponent  implements OnInit{
  date = new FormControl(moment([2017, 0, 1]));
  date7: Date | undefined
  ngOnInit(): void {

  }

  // Define las columnas a mostrar
  displayedColumns: string[] = ['Nombre', 'Edad', 'select'];

  // Define los items a mostrar
  items: Item[] = [
    {Nombre: 'Juan', Edad: 25},
    {Nombre: 'Kevyn', Edad: 30},
    {Nombre: 'Santiago', Edad: 20},
    {Nombre: 'Mateo', Edad: 35},
  ];

  // Define la fuente de datos para la tabla
  dataSource = new MatTableDataSource<Item>(this.items);

  // Define el modelo de selección
  selection = new SelectionModel<Item>(true, []);

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
      this.selection.selected.forEach((row) => console.log(row.Nombre));
    } else {
      this.selection.selected.forEach(element => {
        console.log(`Aceptado: ${element.Nombre}`);
      });
    }
  }
  onInvitar() {
    if (this.selection.selected.length === this.dataSource.data.length) {
      console.log('Invitados todos los elementos seleccionados:');
      this.selection.selected.forEach((row) => console.log(row.Nombre));
    } else {
      this.selection.selected.forEach(element => {
        console.log(`Invitado: ${element.Nombre}`);
      });
    }
  }
  onRechazar() {
    if (this.selection.selected.length === this.dataSource.data.length) {
      console.log('Rechazado para todos los elementos seleccionados:');
      this.selection.selected.forEach((row) => console.log(row.Nombre));
    } else {
      this.selection.selected.forEach(element => {
        console.log(`Rechazado: ${element.Nombre}`);
      });

    }
  }
  onCancelar() {
    this.selection.clear();
  }
}

