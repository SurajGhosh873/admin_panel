import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-units',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './units.component.html',
  styleUrl: './units.component.scss'
})
export class UnitsComponent implements OnInit {
  modalTitle: string = '';


  constructor( private modalService : NgbModal){

  }


  ngOnInit(): void {

  }


  openModalForAddUnit(modalName : any){
    this.modalTitle = 'Add'
    this.modalService.open(modalName,{
      size: 'md',
      centered: true,
      backdrop : 'static'
    })
  }
  openModalForStatusChange(event : any,modalName : any){
    console.log(event.target.value)
    this.modalService.open(modalName,{
      size: 'md',
      centered: true,
      backdrop : 'static'
    })
  }
  openModalForDeleteUnit(modalName : any){
    this.modalService.open(modalName,{
      size: 'md',
      centered: true,
      backdrop : 'static'
    })
  }


  closeModel(){
    this.modalService.dismissAll()
  }

}
