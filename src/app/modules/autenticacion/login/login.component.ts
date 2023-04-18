import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router)  {}
  email : string = '';
  contrasenia : string = '';
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  login(): void {
    if (this.emailFormControl.invalid) {
      alert("Correo no valido")
      return;
    }

    const message = this.authService.login(this.email, this.contrasenia);
    if (message == 'Credenciales inválidas') {
      alert(message);
    } else {
      // Si el inicio de sesión fue exitoso, navegar a la pantalla deseada
      if (this.authService.isLogged) {
        this.router.navigate(['/Equipos']);
      }
    }
  }
}
