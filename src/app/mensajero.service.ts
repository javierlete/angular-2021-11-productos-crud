import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeroService {
  mensajes: Mensaje[] = [];

  nuevo(mensaje: Mensaje): void {
    this.mensajes.push(mensaje);
  }

  limpiar(): void {
    this.mensajes = [];
  }
}
