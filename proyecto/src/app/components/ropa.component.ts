import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Producto } from '../models/product';


@Component({
  selector: 'app-ropa',
  standalone: true,
  imports: [],
  templateUrl: './ropa.component.html',
  styleUrl: '../app.component.css'
})
export class RopaComponent implements OnInit{
  productos2: Producto[] = [];

  constructor(private service: ProductService){

  }
  ngOnInit(): void {
    this.productos2 = this.service.findAll();
  }
}


