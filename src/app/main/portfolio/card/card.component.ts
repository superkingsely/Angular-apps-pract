import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { Project } from 'src/app/interface/project';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css','../portfolio.component.css']
})
export class CardComponent implements OnInit{

  @Input()
  prop!: Project;
  bsmodalref!:BsModalRef;

  constructor(private bsmodalrefService:BsModalService){}
  ngOnInit(): void {
    console.log(this.prop)
  }
  openmodal(){
    const modalopt:ModalOptions={
      class:'modal-lg bg-info ',
      initialState:{
        projecct:this.prop
      }
    }
    this.bsmodalref=this.bsmodalrefService.show(ModalComponent,modalopt)
  }
}
