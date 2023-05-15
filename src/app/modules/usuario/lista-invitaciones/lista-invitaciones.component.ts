import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { InvitationService } from 'src/app/services/invitation.service';
import { Equipo } from 'src/app/shared/model/equipo';
import { Invitacion } from 'src/app/shared/model/invitacion';
export interface Item {
  Equipo: string;
  Siglas: string;
  id: number;
}
@Component({
  selector: 'app-my-component',
  templateUrl: './lista-invitaciones.component.html',
  styleUrls: ['./lista-invitaciones.component.scss']
})

export class ListaInvitacionesComponent implements OnInit {
  constructor(private invitationService: InvitationService) { }

  invitaciones: Invitacion[] = [];
  items: Item[] = [];
  displayedColumns: string[] = ['Equipo', 'Siglas', 'select'];
  dataSource!: MatTableDataSource<Item>;
  selection = new SelectionModel<Item>(true, []);

  ngOnInit(): void {
    const userId = JSON.parse(localStorage.getItem('currentUser')!).id;
    this.invitationService.getInvitationsByUserId(userId).subscribe((invitaciones) => {
      this.invitaciones = invitaciones;
      invitaciones.forEach(element => {
        var obj = {
          Equipo: element.equipo.nombreEquipo,
          Siglas: element.equipo.siglas,
          id: element.equipo.id
        };
        this.items.push(obj);
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

  // Implementa el método para verificar si todos los items están seleccionados
   // Implementa el método para verificar si todos los items están seleccionados
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  onAceptar() {
    this.selection.selected.forEach(invitaciones => {
      this.invitationService.acceptInvitation(invitaciones).subscribe(
        () => {
          console.log(`Invitación aceptada: ${invitaciones.Equipo}`);
        },
        (error) => {
          console.error(`Error al aceptar la invitación: ${error}`);
        }
      );
    });
  }
  onRechazar() {
    const selectedIds: number[] = this.selection.selected.map(row => row.id); // Obtén los IDs de los elementos seleccionados
  
    selectedIds.forEach(id => {
      this.invitationService.denyInvitationById(id).subscribe(
        () => {
          console.log(`Invitación denegada con ID: ${id}`);
        },
        (error) => {
          console.error('Ocurrió un error al denegar la invitación:', error);
        }
      );
    });
  }
  onCancelar() {
    this.selection.clear();
  }
}
