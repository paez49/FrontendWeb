import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../shared/model/usuario';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient){}
  getUsuariosNoEnEquipo(idEquipo: number): Observable<any> {
    return this.http.get<Usuario>(`${environment.backendAPI}/usuarios/noEnEquipo/${idEquipo}`);
  }
}
