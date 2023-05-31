import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import { EquipoService } from 'src/app/services/equipo.service';
import { Equipo } from 'src/app/shared/model/equipo';
import { Usuario } from 'src/app/shared/model/usuario';
import { SolicitudService } from 'src/app/services/solicitud.service';
interface Item {
  Equipo: string;
  Siglas: string;
  idEquipo: number;
}
@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.scss']
})

export class ListaEquiposComponent implements  OnInit{
  constructor(private equipoService: EquipoService,private solicitudService:SolicitudService) { }
  equipos: Equipo[] = []
  items: Item[] = [];
  dataSource!: MatTableDataSource<Item>;
  selection = new SelectionModel<Item>(true, []);
  // Define las columnas a mostrar
  displayedColumns: string[] = ['idEquipo','Equipo', 'Siglas','select'];

  ngOnInit(): void {
    const usuarioJSON = localStorage.getItem('currentUser') ?? "";
    const usuario = JSON.parse(usuarioJSON);
    const idUsuario = usuario.id;
    this.equipoService.getEquiposDisponibles(idUsuario).subscribe((equipos: Equipo[]) => {
      this.equipos = equipos;
      equipos.forEach(element => {
        var obj = {
          Equipo: element.nombreEquipo,
          Siglas: element.siglas,
          idEquipo: element.id
        };
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

  onSolicitarUnirse() {
    const currentUserString = localStorage.getItem('currentUser');
    const currentUser: Usuario = JSON.parse(currentUserString!);

      this.selection.selected.forEach((row) => 
      this.solicitudService.createSolicitud(currentUser.id,row.idEquipo).subscribe(
        (message) => {
          console.log(message)
          //location.reload();
        },
        (error) => {
          console.error( error);
          //location.reload();
        }
      )
      );
  }
}
