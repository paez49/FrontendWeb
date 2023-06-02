import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invitacion } from '../shared/model/invitacion';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  //ACÁ ESTAN TODAS LAS PETICIONES PARA LA PESTAÑA MIS INVITACIONES
  constructor(private http: HttpClient){}
  getInvitationsByUserId(id: number): Observable<Invitacion[]>{
    return this.http.get<Invitacion[]>(`${environment.backendAPI}/invitaciones/get/${id}`);
  }
  denyInvitationById(id: number): Observable<any> {
    return this.http.delete(`${environment.backendAPI}/invitaciones/deny/{id}`);
  }
  acceptInvitation(invitacion:Invitacion):Observable<any>{
    return this.http.put(`${environment.backendAPI}/invitaciones/accept`,invitacion);
  }
  crearInvitacion(idUsuario: number, idEquipo: number): Observable<any> {
    return this.http.post(`${environment.backendAPI}/invitaciones/add/user=${idUsuario}/equipo=${idEquipo}`,{})
  }

}
