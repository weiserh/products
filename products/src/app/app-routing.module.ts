import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductWrapperComponent } from './product/product-wrapper/product-wrapper.component';

const routes: Routes = [
  { path: '', component: ProductWrapperComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
