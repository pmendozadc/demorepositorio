import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
 nombre: string;
}

@Injectable({
  providedIn: 'root',
})
export class DemoRest {

  private http = inject(HttpClient);
  private urlUsuarios = 'http://localhost:8080/usuarios'; 
  private urlNuevo = 'http://localhost:8080/nuevo'; 

  crearUsuario(u:Usuario): Observable<any[]> {
    return this.http.post<any[]>(this.urlNuevo, u);
  }

  getUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.urlUsuarios);
  }

}
