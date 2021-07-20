import { Injectable } from '@angular/core';
import { Store } from 'src/app/store';
import { Product } from '../product';
import { ProductService } from '../product.service';

export class ProductState {
  products: Product[];
  currentProduct: Product;
}


@Injectable()
export class ProductStore extends Store<ProductState> {

  constructor(private productService: ProductService) {
    super(new ProductState());
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe( products => {
      this.setState({ ...this.state, products: products })
    })
  }

  addProduct(product: Product) {
    let products = this.state.products;
    this.productService.createProduct(product).subscribe( response => {
      products.push(product);
      this.setState({ ...this.state, products: products })
    })
  }

}
