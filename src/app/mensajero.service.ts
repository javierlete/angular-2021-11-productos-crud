import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeroService {
  mensajes: string[] = [];

  nuevo(mensaje: string): void {
    this.mensajes.push(mensaje);
  }

  limpiar(): void {
    this.mensajes = [];
  }
}
