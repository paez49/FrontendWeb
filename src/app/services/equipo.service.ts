import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Equipo } from '../shared/model/equipo';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient){}
  //Lista equipos -> Mostrar en la presnetacion los equipos los cuales no hace parte el usuario para solicitar unirse
  getEquiposDisponibles(id: number):Observable<Equipo[]>{
    return this.http.get<Equipo[]>(`${environment.backendAPI}/equipos/${id}/equipos_disponibles`)
  }
  //Equipos -> Para presentar la lista de equipos que hace parte el usuario
  getEquiposParticipe(id: number):Observable<Equipo[]>{
    return this.http.get<Equipo[]>(`${environment.backendAPI}/equipos/${id}/equipos_participe`)
  }
  //Equipos -> AdminEquipos -> Boton eliminar
  deleteEquipo(idEquipo:number):Observable<any>{
    return this.http.delete(`${environment.backendAPI}/equipos/delete/${idEquipo}`)
  }
  //Equipos -> Boton crear equipo
  createEquipo(equipo:Equipo):Observable<Equipo>{
    const body = {equipo}
    return this.http.post(`${environment.backendAPI}/equipos/create`,equipo)
    .pipe(map(response => response as Equipo));
  }
}
