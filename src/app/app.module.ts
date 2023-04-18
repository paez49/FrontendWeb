import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { AutenticacionModule } from './modules/autenticacion/autenticacion.module';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { EquipoModule } from './modules/equipo/equipo.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    MatCardModule,
    AutenticacionModule,
    UsuarioModule,
    EquipoModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
