import { Component, OnInit, inject } from '@angular/core';
import { Product } from './products.mock';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {  
  productsList?: Product[];
  private _productsList = inject(ProductsService) ;

  ngOnInit(): void {
    this.productsList = this._productsList.getProductsList();
  }
}
