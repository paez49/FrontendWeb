import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invitacion } from '../shared/model/invitacion';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor(private http: HttpClient){}
  getInvitationsByUserId(id: number): Observable<Invitacion[]>{
    return this.http.get<Invitacion[]>(`${environment.backendAPI}/invitaciones/get/${id}`);
  }
}
