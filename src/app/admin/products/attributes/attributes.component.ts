import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-attributes',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.scss'
})
export class AttributesComponent implements OnInit {


  constructor( private modalService : NgbModal){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  openModalForAddAttribute(modalName : any){
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
