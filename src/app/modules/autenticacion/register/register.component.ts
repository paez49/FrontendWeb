import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { RegisterRequest } from 'src/app/shared/model/auth/register.request';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  constructor(private authService: AuthService,private router:Router){}
  email: string= ''
  contrasenia: string = ''
  confirmarContrasenia: string= ''
  username: string = ''
  register():void{
    if (!this.email || !this.contrasenia || !this.username || !this.confirmarContrasenia) {
      alert('Error: Los campos requeridos no pueden estar vacíos');
      this.email = '';
      this.contrasenia = '';
      this.confirmarContrasenia = '';
      this.username = '';
      return;
    }

    // Validar que las contraseñas coincidan
    if (this.contrasenia !== this.confirmarContrasenia) {
      this.contrasenia = '';
      this.confirmarContrasenia = '';
      console.log('Error: Las contraseñas no coinciden');
      return;
    }
    
    const registerRequest = new RegisterRequest();
    registerRequest.email = this.email;
    registerRequest.username = this.username
    registerRequest.password = this.contrasenia
  this.authService.register(registerRequest)
  .subscribe(
    response => {
      console.log('Registro exitoso');
      this.router.navigate(['/login'])
    },
    error => {
      alert(error.error.message);
      // Realizar acciones adicionales en caso de error, como mostrar un mensaje de error al usuario
    }
  );



  
  }
}
