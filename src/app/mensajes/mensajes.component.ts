import { Component } from '@angular/core';
import { MensajeroService } from '../mensajero.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
  constructor(public mensajero: MensajeroService) { }
}
