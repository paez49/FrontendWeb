
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = true;
  redirectUrl!: string;

  constructor() { }

  logout():void{
    this.isLogged = false;
  }

  logIn():void{
    this.isLogged = true;
  }
  isLoggedIn():boolean{
    return this.isLogged;
  }
}
