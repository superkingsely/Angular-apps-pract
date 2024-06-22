import { Component } from '@angular/core';
interface Btn{
  value:string,
  span:boolean,
  nos:boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  btns:Btn[]=[
    {
    value: 'c',
    span: true,
    nos:false
  },
  {
    value: '%',
    span: false,
    nos: false
  },
  {
    value: '/',
    span: false,
    nos: false
  },
  {
    value: '7',
    span: false,
    nos: true
  },
  {
    value: '8',
    span: false,
    nos: true
  },
  {
    value: '9',
    span: false,
    nos: true
  },
  {
    value: '*',
    span: false,
    nos: true
  },
  {
    value: '4',
    span: false,
    nos: true
  },
  {
    value: '5',
    span: false,
    nos: true
  },
  {
    value: '6',
    span: false,
    nos: true,
  },
  {
    value: '-',
    span: false,
    nos: true
  },
  {
    value: '1',
    span: false,
    nos: true
  },
  {
    value: '2',
    span: false,
    nos: true
  },
  {
    value: '3',
    span: false,
    nos: true
  },
  {
    value: '+',
    span: false,
    nos: false
  },
  {
    value: '0',
    span: false,
    nos: true
  },
  {
    value: '.',
    span: false,
    nos: false
  },
  {
    value: '=',
    span: true,
    nos: false
  },
]

clickcol!:boolean;
displayValue: string='0'
prevvalue:string=''
currentval:string=''
answer:string=''
op:string=''
num1!:number;
num2!:number;
constructor(){
}

handleclick(obj:any){
  this.clickcol=true
  if(obj.nos===true){

    if(this.num1!==undefined && this.op!==''){
    console.log('second nos')
    // this.currentval+=obj.value
    this.displayValue+=obj.value
    this.num2=+this.displayValue

    console.log(this.num2)
    }else{
      this.currentval+=obj.value
      this.displayValue=this.currentval
      this.num1=+this.displayValue
    }
    console.log(this.num1)
  }else if(obj.value==='c'){
    this.clear()
  }else if(['+','-','*','/'].includes(obj.value)){
    this.op=obj.value
    this.displayValue=obj.value
    console.log(this.op)
  }else if(obj.value==='='){
    this.cal()
  }
}

clear(){
    this.displayValue='0'
    this.currentval=''
    this.prevvalue=''
    this.op=''
    this.answer=''
  }
cal(){
console.log('calculating...')
// let num1=parseFloat(this.prevvalue)
// let num2=parseFloat(this.currentval)
switch(this.op){
  case '+':{
    this.answer=(this.num1 + this.num2).toString()
  }break;
}

}

// handleclick(value:string){
//   if(value==='c'){
//     this.clear()
//   }else if(value==='='){
//     this.cal()
//   }else if(['+','-','*','/','%'].includes(value)){
//     this.setop(value)
//   }
//   else{
//     this.mynos(value)
//   }

// }
// clear(){
//   this.displayValue='0'
//   this.currentval=''
//   this.prevvalue=''
//   this.op=''
//   this.answer=''
// }
// cal(){
// console.log('calculating...')
// let num1=parseFloat(this.prevvalue)
// let num2=parseFloat(this.currentval)
// switch(this.op){
//   case '+':{
//     this.answer=(num1 + num2).toString()
//   }break;
// }
// }
// setop(op:string){
//   console.log('peratinon')
// if(this.currentval==="" && this.answer!==''){
//   this.prevvalue=this.answer

// }else{
//   this.prevvalue=this.currentval


// }

//   this.op=op
//   this.currentval=''

// }
// mynos(value:string){
//   if(this.answer!==""){
//     this.clear()
//     // this.displayValue='0'
//   }
//   this.currentval +=value
//   this.displayValue=this.currentval

// }
// down(){
//   this.clickcol=true
// console.log(this.clickcol)

// }
// up(){
//   this.clickcol=false
// console.log(this.clickcol)
// }


}
