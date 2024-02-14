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

    constructor(private router: Router){

    }

  ngOnInit(): void {

  }



  goToOrderDetails(){


    this.router.navigateByUrl('admin/order-details');
  }

}
