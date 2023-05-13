import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router)  {}
  usuario : string = '';
  contrasenia : string = '';
 
 
  login(): void {
    this.authService.login(this.usuario,this.contrasenia).subscribe((response: any) => {
      console.log(localStorage.getItem('currentUser'))
      this.router.navigate(['/Equipos'])
    }, (error: any) => {
      console.error(error);
    });
  }
}
