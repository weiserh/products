import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductWrapperComponent } from './product/product-wrapper/product-wrapper.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ProductService } from './product/product.service';
import { HttpClientModule } from '@angular/common/http';


const productRoutes: Routes = [
  { path: '', component: ProductWrapperComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductWrapperComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forChild(productRoutes),
    SharedModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
