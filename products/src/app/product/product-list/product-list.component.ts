import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { ProductStore } from '../services/product.store';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html'
  // ,
  // styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = 'Products';
  errorMessage: string = '';

  displayCode: boolean = false;

  products: Product[] = [];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null = null;
  sub: any;

  constructor(private productService: ProductService,
    private productStore: ProductStore) { }

  ngOnInit(): void {
    
    this.productStore.state$
    .pipe(map(state => state.products))
    .subscribe(data => {
      if(data){
        this.products = data;
      }
    });
    
    this.productStore.state$
    .pipe(map(state => state.currentProduct))
    .subscribe(data => {
      if(data){
        this.selectedProduct = data;
      }
    });

    // this.sub = this.productService.selectedProductChanges$.subscribe(
    //   currentProduct => this.selectedProduct = currentProduct
    // );
    
    // this.productService.getProducts().subscribe({
    //   next: (products: Product[]) => this.products = products,
    //   error: err => this.errorMessage = err
    // });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkChanged(): void {
    this.displayCode = !this.displayCode;
  }

  newProduct(): void {
    this.productService.changeSelectedProduct(this.productService.newProduct());
  }

  productSelected(product: Product): void {
    this.productService.changeSelectedProduct(product);
  }

}