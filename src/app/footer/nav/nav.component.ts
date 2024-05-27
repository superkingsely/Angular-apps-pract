import { Component } from '@angular/core';

@Component({
  selector: '[nav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  nav:any[]=[
    {
      text:'Home',
      path:'home'
    },
    {
      text:'About',
      path:'about'
    },
    {
      text:'Category',
      path:'category'
    },
    {
      text:'Post',
      path:'post'
    },
    {
      text:'Terms & Conditions',
      path:'terms'
    },
  ]
arra: any=new Array(6)

}
