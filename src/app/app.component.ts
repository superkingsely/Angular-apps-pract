import { Component } from '@angular/core';
interface Supplier{
  name:string,
  address:string,
  phone:string,
  email:string
}
@Component({
  selector: '[root]',
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
search:string=''
filteredDatat:Supplier[]=[]

constructor(){
  this.filteredDatat=this.searchValue()
}

searchValue(){
  if(this.search==='' ){
    return this.suppliers
  }else{
    return this.filteredDatat=this.suppliers.filter((suplier:Supplier)=>{
      return Object.values(suplier).some((val:string)=>{
        return val.toLowerCase().includes(this.search.toLowerCase())
      })
    })
  }
}

}
