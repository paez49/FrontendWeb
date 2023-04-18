import { Component } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import { RouterModule, Routes } from '@angular/router';
import { MatDialog } from'@angular/material/dialog';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NewTeamComponent } from '../new-team/new-team.component';
@Component({
  selector: 'app-mis-equipos',
  templateUrl: './mis-equipos.component.html',
  styleUrls: ['./mis-equipos.component.scss']
})
export class MisEquiposComponent {
  constructor(public dialog: MatDialog){}
  openDialog(){
   this.dialog.open(NewTeamComponent);
  }

}
