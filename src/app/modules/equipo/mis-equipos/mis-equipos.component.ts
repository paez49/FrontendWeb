import { Component } from '@angular/core';
import {RadioButtonModule} from 'primeng/radiobutton';
import { RouterModule, Routes } from '@angular/router';
import { MatDialog } from'@angular/material/dialog';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NewTeamComponent } from '../new-team/new-team.component';
import {AuthService} from "../../../services/auth.service";
@Component({
  selector: 'app-mis-equipos',
  templateUrl: './mis-equipos.component.html',
  styleUrls: ['./mis-equipos.component.scss']
})
export class MisEquiposComponent {
  constructor(public dialog: MatDialog,private authService: AuthService){}
  logout(): void {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('token')
    location.reload();
    this.authService.logout()
  }
  openDialog(){
   this.dialog.open(NewTeamComponent);
  }

}
