import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-type-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-type-list.component.html',
  styleUrl: './user-type-list.component.scss'
})
export class UserTypeListComponent {

  modalTitle = ""


  closeModel(){}

  openModalForDeleteUnit(modalName: any){}

  openModalForAddUnit(modalName : any){}


  openModalForStatusChange(event : any,modalName : any){}
}
