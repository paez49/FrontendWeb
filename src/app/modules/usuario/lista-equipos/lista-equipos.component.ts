import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/shared/model/equipo';
interface Item {
  Equipo: string;
  Siglas: string;
  id: number;
}
@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.scss']
})

export class ListaEquiposComponent implements  OnInit{
  constructor(private equipoService: EquipoService) { }
  equipos: Equipo[] = []
  items: Item[] = [];
  dataSource!: MatTableDataSource<Item>;
  selection = new SelectionModel<Item>(true, []);
  // Define las columnas a mostrar
  displayedColumns: string[] = ['Equipo', 'Siglas','select'];

  ngOnInit(): void {
    const usuarioJSON = localStorage.getItem('currentUser') ?? "";
    const usuario = JSON.parse(usuarioJSON);
    const idUsuario = usuario.id;
    this.equipoService.getEquiposDisponibles(idUsuario).subscribe((equipos: Equipo[]) => {
      this.equipos = equipos;
      console.log(equipos)
      equipos.forEach(element => {
        console.log(element)
        var obj = {
          Equipo: element.nombreEquipo,
          Siglas: element.siglas,
          id: element.id
        };
        console.log(obj)
        this.items.push(obj)
      });
    this.dataSource = new MatTableDataSource<Item>(this.items);
    });
  }

  // Implementa el método para seleccionar/deseleccionar todos los items
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  onAceptar() {
    if (this.selection.selected.length === this.dataSource.data.length) {
      console.log('Aceptado para todos los elementos seleccionados:');
      this.selection.selected.forEach((row) => console.log(row.Equipo));
    } else {
      console.log(`Aceptado: ${this.selection.selected[0].Equipo}`);
    }
  }

  onRechazar() {
    if (this.selection.selected.length === this.dataSource.data.length) {
      console.log('Rechazado para todos los elementos seleccionados:');
      this.selection.selected.forEach((row) => console.log(row.Equipo));
    } else {
      console.log(`Rechazado: ${this.selection.selected[0].Equipo}`);
    }
  }
}
