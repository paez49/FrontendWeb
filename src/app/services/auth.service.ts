
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = false;
  redirectUrl!: string;

  constructor() {
  }

  logout():void{
    this.isLogged = false;
  }

  logIn():void{
    this.isLogged = true;
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }

  login(username: string, password: string): string {

    // Comprobar si las credenciales son válidas
    if (username === 'a@a.es' && password === '1234') {
      // Almacenar información del usuario en localStorage
      localStorage.setItem('currentUser', JSON.stringify({username, password}));
      // Establecer la bandera de inicio de sesión
      this.isLogged = true;
      return 'Inicio de sesión exitoso';
    } else {
      return 'Credenciales inválidas';
    }
  }
}
