import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


import { ListaInvitacionesComponent } from './lista-invitaciones/lista-invitaciones.component';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';



@NgModule({
  declarations: [
    ListaInvitacionesComponent,
    ListaEquiposComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class UsuarioModule { }
