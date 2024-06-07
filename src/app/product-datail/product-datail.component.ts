import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productsList } from '../products/products.mock';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-datail',
  templateUrl: './product-datail.component.html',
  styleUrls: ['./product-datail.component.css']
})
export class ProductDatailComponent implements OnInit {
  constructor(private _route: ActivatedRoute) { }
  private _productService = inject(ProductsService);
  product?: Product;
  productList: Product[] = productsList;
  loading: boolean = true;
  color?: string;

  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(params => {                
        this.product = this._productService.getProductById(params['productId']);
        this.loading = false;
        this.color = this.product?.price as number > 3000 ? 'red' : 'black';
      });
    }, 500);
  }
}
