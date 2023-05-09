
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { enviroment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged = false;

  constructor(private http: HttpClient) {
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }

  login(username: string, password: string) {
    const url = `${enviroment.backendAPI}/api/login`;
    const loginRequest = { username, password };
    return this.http.post(url, loginRequest);
  }
}
