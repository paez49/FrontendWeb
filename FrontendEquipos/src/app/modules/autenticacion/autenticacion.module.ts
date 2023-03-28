import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RecuperarContraseniaComponent } from './recuperar-contrasenia/recuperar-contrasenia.component';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecuperarContraseniaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    TabMenuModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  
})
export class AutenticacionModule { }
