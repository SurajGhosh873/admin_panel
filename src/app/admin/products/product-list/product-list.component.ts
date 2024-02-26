import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  modalTitle = 'Add'
  constructor(private router : Router){
  }

  goToAddProduct(){
    this.router.navigateByUrl('/admin/add-product')
  }

  goToEditProduct(){
    this.router.navigateByUrl('/admin/add-product')
  }



  openModalForStatusChange(event : any , modalName : any){

  }

  openModalForDeleteProduct(modalName : any){

  }

  closeModel(){
  }
}
