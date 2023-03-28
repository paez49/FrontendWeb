import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { LoginComponent } from './modules/autenticacion/login/login.component';
import { RegisterComponent } from './modules/autenticacion/register/register.component';
import { MisEquiposComponent } from './modules/equipo/mis-equipos/mis-equipos.component';
import { AuthGuard } from './guards/auth.guard';
import { ListaInvitacionesComponent } from './modules/usuario/lista-invitaciones/lista-invitaciones.component';
import { RecuperarContraseniaComponent } from './modules/autenticacion/recuperar-contrasenia/recuperar-contrasenia.component';
import { AdministrarEquipoComponent } from './modules/equipo/administrar-equipo/administrar-equipo.component';


const routes: Routes = [
  {path:'', redirectTo:'Home',pathMatch:'full'},
  {path:'Home', component: HomeComponent},
  {path:'Equipos', component: MisEquiposComponent,canActivate:[AuthGuard]},
  {path:'Equipo/:name', component: AdministrarEquipoComponent,canActivate:[AuthGuard]},
  {path: 'MisInvitaciones', component: ListaInvitacionesComponent,canActivate:[AuthGuard]},
  {path: 'login', component:LoginComponent,pathMatch:'full'},
  {path: 'register', component:RegisterComponent, pathMatch:'full'},
  {path: 'recuperarContrasenia' ,component: RecuperarContraseniaComponent, pathMatch:'full'},
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
