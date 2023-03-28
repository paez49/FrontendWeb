import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


import { ListaInvitacionesComponent } from './lista-invitaciones/lista-invitaciones.component';



@NgModule({
  declarations: [
    ListaInvitacionesComponent
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
