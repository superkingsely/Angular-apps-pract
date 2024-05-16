import { Component } from '@angular/core';
interface Supplier{
  name:string,
  address:string,
  phone:string,
  email:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

list:string[]=[
  'yam','beans','rice'
]
boo:boolean=true
isActive:boolean=true
constructor(){

}


}
