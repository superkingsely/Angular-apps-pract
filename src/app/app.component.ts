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
    name: 'dami',
    address: 'address1',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'naza',
    address: 'address1',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'praise',
    address: 'address1',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'ele',
    address: 'address1',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
  {
    name: 'chi',
    address: 'address1',
    phone: '08029696733',
    email: 'superkingsely@gmail.com'
  },
]
filteredDatat:Supplier[]=[]

searchValue(value:string){
  // console.log(value)
  this.filteredDatat=this.suppliers.filter((supplier:Supplier)=>{

    console.log(Object.values(supplier).some((val:string)=>{
      val.toLowerCase().includes(value.toLowerCase())
    }))
    // return Object.values(supplier).some((val:string)=>{
    //   val.toLowerCase().includes(value.toLowerCase())
    // })

  })
}

}
