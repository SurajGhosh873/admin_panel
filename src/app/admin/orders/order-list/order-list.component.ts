import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.scss'
})
export class OrderListComponent implements OnInit {
  title: string = '';
  urlArray: Array<string> = [];

    constructor(private router: Router){

    }

  ngOnInit(): void {
    this.urlArray = (this.router.url).split('/')
    const len = this.urlArray.length
    console.log(this.router.url,this.urlArray[len-1] , len)
    const pageTitle = this.urlArray[len-1]


    switch (pageTitle) {
      case 'all-order-list':
        this.title = "All"
        break;
      case 'schedule-order-list':
        this.title = "Schedule"
        break;
      case 'pending-order-list':
        this.title = "Pending"
        break;
      case 'accepted-order-list':
        this.title = "Accepted"
        break;
      case 'processing-order-list':
        this.title = "Processing"
        break;
      case 'on-the-way-order-list':
        this.title = "On The Way"
        break;
      case 'delivered-order-list':
        this.title = "Delivered"
        break;
      case 'cancelled-order-list':
        this.title = "Cancelled"
        break;
      case 'payment-failed-order-list':
        this.title = "Payment Failed"
        break;
      case 'refunded-order-list':
        this.title = "Refunded"
        break;


      default:
        this.title = "All"
        break;
    }

  }



  goToOrderDetails(){


    this.router.navigateByUrl('admin/order-details');
  }

}
