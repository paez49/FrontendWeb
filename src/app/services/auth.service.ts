
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { AuthenticationResponse } from '../shared/model/auth/authentication.response';
import { BehaviorSubject, Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationResponseSubject: BehaviorSubject<AuthenticationResponse>
  isLogged = false;
  public get token(): string {
    return this.authenticationResponseSubject.value.token
  }

  constructor(private http: HttpClient) {
    let user = localStorage.getItem('currentUser')
    if(user === null){
      this.authenticationResponseSubject = new BehaviorSubject<AuthenticationResponse>(new AuthenticationResponse)
    }else{
      this.authenticationResponseSubject = new BehaviorSubject<AuthenticationResponse>(JSON.parse(user))
    }
  }

  isLoggedIn(): boolean {
    return this.isLogged;
  }

  login(username: string, password: string) {
    const credentials = {username, password}
    const url = `${environment.backendAPI}/api/auth/login`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    return this.http.post<any>(url, credentials, options);
  }
  }

