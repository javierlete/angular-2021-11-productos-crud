import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = 'http://localhost:3000/productos/';
  
  constructor(private http: HttpClient) { }
  
  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url);
  }
  
  obtenerPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + id);
  }

  agregar(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto);
  }
  
  modificar(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.url + producto.id, producto);
  }

  borrar(id: number): Observable<any> {
    return this.http.delete<any>(this.url + id);
  }
}
