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
answer!: any;
constructor(){
}

handleclick(value:string){
  let val1;
  let opv;
  let val2;
  let isop:boolean=false;
  this.btns.forEach((btn:Btn)=>{

    if(+value===+btn.value ){
      if(isop===true){
        val2=+value
        console.log('val2')

      }else{

        console.log('good')
        val1=+value
        console.log('val1')
      }
    }else{
      opv=value
      console.log('opv',opv)
      isop=true
    }
  })
  if(value==='='||value==='c'){
    this.displayValue='0'
  }
  else{

    this.displayValue=value
  }
  console.log(value)
  // this.op(val1,val2,opv)
}
op(val1:number,val2:number,op:string){
  if(op==='+'){
    this.answer=val1+val2
  }
}
down(){
  this.clickcol=true

}
up(){
  this.clickcol=false
// console.log(this.clickcol)

}


}
