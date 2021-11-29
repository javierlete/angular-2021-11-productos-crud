import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  obtenerProductos(): Observable<Producto[]> {
    return of([
      { id: 1, nombre: 'Portátil', precio: 543.45, fechaCaducidad: new Date() },
      { id: 2, nombre: 'Ratón', precio: 21.45, fechaCaducidad: new Date() },
    ]);
  }
}
