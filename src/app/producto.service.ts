import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Mensaje, tipoMensaje } from './mensaje';
import { MensajeroService } from './mensajero.service';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = 'http://localhost:3000/productos/';

  constructor(private http: HttpClient, private mensajero: MensajeroService) { }

  mensaje(texto: string, tipo: tipoMensaje): void {
    this.mensajero.nuevo({ texto, tipo });
  }

  error<T>(texto: string, resultado: T): Observable<T> {
    this.mensajero.nuevo({ texto, tipo: 'danger' });
    return of(resultado as T);
  }

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url).pipe(
      tap(_ => this.mensaje('Se han recibido los productos', 'success')),
      catchError(_ => this.error<Producto[]>('No se han recibido los productos', []))
    );
  }

  obtenerPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + id).pipe(
      tap(_ => this.mensaje('Se ha recibido el producto', 'success')),
      catchError(_ => this.error<Producto>('No se ha recibido el producto', { id: 0, nombre: '', precio: 0.0 }))
    );
  }

  agregar(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.url, producto).pipe(
      tap(_ => this.mensaje('Se ha agregado el producto', 'success')),
      catchError(_ => this.error<Producto>('No se ha agregado el producto', producto))
    );
  }

  modificar(producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(this.url + producto.id, producto).pipe(
      tap(_ => this.mensaje('Se ha modificado el producto', 'success')),
      catchError(_ => this.error<Producto>('No se ha modificado el producto', producto))
    );
  }

  borrar(id: number): Observable<any> {
    return this.http.delete<any>(this.url + id).pipe(
      tap(_ => this.mensaje('Se ha borrado el producto', 'success')),
      catchError(_ => this.error('No se ha borrado el producto', id))
    );
  }
}
