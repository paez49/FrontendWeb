import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Solicitud } from '../shared/model/solicitud';
@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  //Lista equipos -> Solicitar unirse boton
  constructor(private http: HttpClient){}
  createSolicitud(idUsuario: number,idEquipo:number):Observable<any>{
    const body = {idUsuario,idEquipo}
    return this.http.post(`${environment.backendAPI}/solicitudes/add`,body)
  }
  /* Cuando se consultan todos los equipos participes, en realidad lo que llegan son objetos de Equipo
     Entonces en esta parte la idea sería consultar al equipo y luego llamar a este servicio,
     sacando el id del objeto Equipo cuando se abra AdminEquipo.
  */
  //Equipos -> AdminEquipo -> Lista solicitudes pendientes
  getSolicitudes(idEquipo:number):Observable<Solicitud[]>{
    return this.http.get<Solicitud[]>(`${environment.backendAPI}/solicitudes/get/${idEquipo}`)
  }
  //Equipos -> AdminEquipo -> Lista solicitudes pendientes -> Boton aceptar
  acceptSolicitud(solicitud:Solicitud):Observable<any>{
    const body ={solicitud}
    return this.http.put(`${environment.backendAPI}/solicitudes/accept`,body)
  }
    //Equipos -> AdminEquipo -> Lista solicitudes pendientes -> Boton rechazar
  denySolicitud(idSolicitud:number):Observable<any>{
    return this.http.delete(`${environment.backendAPI}/solicitudes/deny/${idSolicitud}`)
  }
}
