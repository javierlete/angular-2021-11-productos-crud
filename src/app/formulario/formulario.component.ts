import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  producto: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    fechaCaducidad: undefined
  };

  constructor(private route: ActivatedRoute, private productoService: ProductoService, private location: Location) { }

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get('id'));

    if(id) {
      this.productoService.obtenerPorId(id).subscribe(
        producto => console.log(this.producto = producto));
    }
  }

  aceptar() {
    if(this.producto.id) {
      this.productoService.modificar(this.producto).subscribe(
        _ => this.volver()
      );
    } else {
      this.productoService.agregar(this.producto).subscribe(
        _ => this.volver()
      );
    }
  }

  volver() {
    this.location.back();
  }

}
