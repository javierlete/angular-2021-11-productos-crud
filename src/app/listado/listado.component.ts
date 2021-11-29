import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  productos: Producto[] = [];
  
  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  private cargarProductos() {
    this.productoService.obtenerProductos().subscribe(productos => this.productos = productos);
  }

  borrar(id: number) {
    this.productoService.borrar(id).subscribe(
      _ => this.cargarProductos()
    );
  }
}
