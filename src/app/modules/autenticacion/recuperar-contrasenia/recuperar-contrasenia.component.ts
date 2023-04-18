import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-recuperar-contrasenia',
  templateUrl: './recuperar-contrasenia.component.html',
  styleUrls: ['./recuperar-contrasenia.component.scss']
})
export class RecuperarContraseniaComponent {
  email : String | undefined
  contrasenia : String | undefined
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  recoveryPassword():void{
    console.log(this.email)
    console.log(this.contrasenia)
    console.log("INICIO SESION")

  }
}
