import { Injectable } from '@angular/core';
import { Producto } from '../models/product';
import { products } from '../data/producto.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  findAll(): Producto[]{
    return products;
  }
}
