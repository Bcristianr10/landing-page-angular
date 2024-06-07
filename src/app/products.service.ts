import { Injectable } from '@angular/core';
import { Product, productsList } from './products/products.mock';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsList?: Product[] = productsList;

  getProductsList(): Product[] {
    return this?.productsList || [];
  }

  getProductById(id: number): Product | undefined {    
    return this?.productsList?.find(product => product.id == id);    
  }
  
  constructor() { }

}
