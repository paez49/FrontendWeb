import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MisEquiposComponent } from './mis-equipos/mis-equipos.component';
import { AdministrarEquipoComponent } from './administrar-equipo/administrar-equipo.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {CalendarModule} from 'primeng/calendar';
import { MatNativeDateModule } from '@angular/material/core';

import { NewTeamComponent } from './new-team/new-team.component';
@NgModule({
  declarations: [
    MisEquiposComponent,
    AdministrarEquipoComponent,
    NewTeamComponent
  ],
  imports: [
    CommonModule,
    RadioButtonModule,
    MatSlideToggleModule,
    MatButtonModule,
    RouterModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    CalendarModule,
    FormsModule
  ]
})
export class EquipoModule { }
