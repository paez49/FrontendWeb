import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  //Lista equipos
  //Solicitar uniser boton
  constructor(private http: HttpClient){}
  createSolicitud(idUsuario: number,idEquipo:number):Observable<any>{
    const body = {idUsuario,idEquipo}
    return this.http.post(`${environment.backendAPI}/solicitudes/add`,body)
  }

}
