import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../objects/Response';
import {ResponseUsuarios} from '../objects/ResponseUsuarios';
import {Usuario} from '../objects/Usuario';
import {GeneralResponse} from '../objects/GeneralResponse';
import {Rol} from '../objects/Rol';
import {Sistema} from '../objects/Sistema';
import { ResponseRolesDatum } from '../objects/ResponseRolesDatum';
import { Cargos } from '../objects/cargos';


@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  baseurl = 'http://localhost:8087/seguridadServices/api';

  constructor(private http: HttpClient) {
  }

  traerTodosLosSistemas(): Observable<Response> {
    return this.http.get<Response>(this.baseurl + '/sistemas/traer');
  }

  traerRolesPorSistema(sistema: Sistema): Observable<ResponseRolesDatum> {
    return this.http.get<ResponseRolesDatum>(this.baseurl + '/sistemas/traerRolesPorSistema/' + sistema.id);
  }

  traerTodosLosUsuarios(): Observable<ResponseUsuarios> {
    return this.http.get<ResponseUsuarios>(this.baseurl + '/usuarios/traerTodos');
  }

  actualizarLosUsuarios(usuario: Usuario): Observable<GeneralResponse<Usuario>> {
    return this.http.put<GeneralResponse<Usuario>>(this.baseurl + '/usuarios/actualizar', usuario);
  }

  traerTodosD(): Observable<ResponseUsuarios> {
    return this.http.get<ResponseUsuarios>(this.baseurl + '/usuarios/traerPorUsuario ');
  }

  /*traerTodosLosCargos(): Observable<cargos:Cargos>  {
    return this.http.get<>();
  }*/
}
