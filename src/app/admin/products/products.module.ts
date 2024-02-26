import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { UnitsComponent } from './units/units.component';
import { AttributesComponent } from './attributes/attributes.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    UnitsComponent,
    AttributesComponent,
    ProductListComponent,
    AddProductComponent,
    ProductDetailComponent
  ],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
