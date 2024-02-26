import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnitsComponent } from './units/units.component';
import { AttributesComponent } from './attributes/attributes.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRequestComponent } from './product-request/product-request.component';

const routes: Routes = [
  {
    path: 'unit-list',
    component : UnitsComponent
  },
  {
    path: 'attribute-list',
    component : AttributesComponent
  },
  {
    path: 'product-list',
    component : ProductListComponent
  },
  {
    path: 'product-gallery',
    component : ProductDetailComponent
  },
  {
    path: 'add-product',
    component : AddProductComponent
  },
  {
    path: 'product-request-list',
    component : ProductRequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
