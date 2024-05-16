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


suppliers:Supplier[]=[
  {
    name: 'supplier1',
    address: 'Address1',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier2',
    address: 'Address2',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier3',
    address: 'Address3',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier4',
    address: 'Address4',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier5',
    address: 'Address5',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier6',
    address: 'Address6',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier7',
    address: 'Address7',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier8',
    address: 'Address8',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier9',
    address: 'Address9',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier10',
    address: 'Address10',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier11',
    address: 'Address11',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier12',
    address: 'Address12',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier13',
    address: 'Address13',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier14',
    address: 'Address14',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier15',
    address: 'Address15',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier16',
    address: 'Address16',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier17',
    address: 'Address17',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier18',
    address: 'Address18',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier19',
    address: 'Address19',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'supplier20',
    address: 'Address20',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
]

constructor(){

}
show(eventbj:HTMLTableSectionElement) {
  console.log(eventbj)
}

}
