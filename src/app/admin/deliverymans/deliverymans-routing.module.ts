import { VehicleCategoryComponent } from './vehicle-category/vehicle-category.component';
import { DeliverymanListComponent } from './deliveryman-list/deliveryman-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeliverymanComponent } from './add-deliveryman/add-deliveryman.component';
import { DeliverymanRequestListComponent } from './deliveryman-request-list/deliveryman-request-list.component';

const routes: Routes = [
  {
    path: 'add-deliveryman',
    component: AddDeliverymanComponent
  },
  {
    path: 'deliveryman-list',
    component: DeliverymanListComponent
  },
  {
    path: 'deliveryman-request-list',
    component: DeliverymanRequestListComponent
  },
  {
    path: 'vehicle-category-list',
    component: VehicleCategoryComponent
  },
  {
    path: 'review-list',
    component: VehicleCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliverymansRoutingModule { }
