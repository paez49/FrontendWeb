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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { MaterialModule } from './material.module';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TabMenuModule,
    AutenticacionModule,
    UsuarioModule,
    EquipoModule,
    MaterialModule,
    MatFormFieldModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
