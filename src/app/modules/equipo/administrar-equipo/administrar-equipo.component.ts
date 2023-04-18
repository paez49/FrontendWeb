import { Component, OnInit, Inject } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { Item } from '../../usuario/lista-invitaciones/lista-invitaciones.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-component',
  templateUrl: './administrar-equipo.component.html',
  styleUrls: ['./administrar-equipo.component.scss']
})
export class AdministrarEquipoComponent  implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Define las columnas a mostrar
  displayedColumns: string[] = ['select', 'Equipo', 'Miembros'];

  // Define los items a mostrar
  items: Item[] = [
    {Equipo: 'Millonarios', Miembros: 25},
    {Equipo: 'Santa Fe', Miembros: 30},
    {Equipo: 'Pereira', Miembros: 20},
    {Equipo: 'Equidad', Miembros: 35},
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

