import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { RefundRequestListComponent } from './refund-request-list/refund-request-list.component';

const routes: Routes = [
  {
    path: 'all-order-list',
    component: OrderListComponent
  },
  {
    path: 'schedule-order-list',
    component: OrderListComponent
  },
  {
    path: 'pending-order-list',
    component: OrderListComponent
  },
  {
    path: 'accepted-order-list',
    component: OrderListComponent
  },
  {
    path: 'processing-order-list',
    component: OrderListComponent
  },
  {
    path: 'on-the-way-order-list',
    component: OrderListComponent
  },
  {
    path: 'delivered-order-list',
    component: OrderListComponent
  },
  {
    path: 'cancelled-order-list',
    component: OrderListComponent
  },
  {
    path: 'payment-failed-order-list',
    component: OrderListComponent
  },
  {
    path: 'refunded-order-list',
    component: OrderListComponent
  },

  {
    path: 'order-details',
    component: OrderDetailsComponent
  },
  {
    path: 'order-refund-requests',
    component: RefundRequestListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
