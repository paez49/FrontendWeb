import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MisEquiposComponent } from './mis-equipos/mis-equipos.component';
import { AdministrarEquipoComponent } from './administrar-equipo/administrar-equipo.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    MisEquiposComponent,
    AdministrarEquipoComponent
  ],
  imports: [
    CommonModule,
    RadioButtonModule,
    MatSlideToggleModule,
    MatButtonModule,
    RouterModule
  ]
})
export class EquipoModule { }
