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

constructor(){
  this.filteredDatat=this.suppliers
}

searchValue(value:string){
  // console.log(value)
  // let oobj=this.filteredDatat[0]
  // console.log(Object.values(oobj))
  // let bjarry=Object.values(oobj)
  // bjarry.some((val:any)=>{
  //   console.log('val',val)
  // })

  this.filteredDatat=this.suppliers.filter((supplier:Supplier)=>{

    //  Object.values(supplier).some((val:any)=>{
    //     val.toString().toLowerCase().includes(value.toLowerCase())
    //   })


    return  supplier.name.toLowerCase().includes(value.toLowerCase())


  })





    console.log(this.filteredDatat)
}

}
