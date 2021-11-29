import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  productos: Producto[] = [
    { id: 1, nombre: 'Portátil', precio: 321.45, fechaCaducidad: new Date() },
    { id: 2, nombre: 'Ratón', precio: 21.45, fechaCaducidad: new Date() },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
