
import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { AuthenticationResponse } from '../shared/model/auth/authentication.response';
import { BehaviorSubject, Observable, map } from 'rxjs';
import {User} from '../shared/model/usuario'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticationResponseSubject: BehaviorSubject<AuthenticationResponse>
  
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
  public get currentUserValue(): User {
    let user = new User
    user.id = this.authenticationResponseSubject.value.id
    user.email = this.authenticationResponseSubject.value.email
    user.username = this.authenticationResponseSubject.value.username
    return user
  }
  isLoggedIn(){
   return this.currentUserValue.id !== 0
  }

  login(username: string, password: string) {
    const credentials = {username, password}
    const url = `${environment.backendAPI}/api/auth/login`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const options = { headers: headers };
    return this.http.post<any>(url, credentials, options)
    .pipe(map(response => {
      // extract the token and user from the response
      const token = response.token;
      const user = response.user;
  
      // store the token in local storage
      //localStorage.setItem('token', token);
  
      // store the user object in local storage
      localStorage.setItem('user', JSON.stringify(user));
  
      // emit the user object using a subject so that other components can access it
      this.authenticationResponseSubject.next(user);
  
      // return the user object
      return user;
    }));
    
  }
  logout() {
    return this.http.post(`${environment.backendAPI}/auth/logout`, {}).pipe(
      map(v => {
        localStorage.removeItem('currentUser')
        localStorage.removeItem('token')
        this.authenticationResponseSubject.next(new AuthenticationResponse);
      })
    )
  }
  }

