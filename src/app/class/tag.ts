export class Tag {
  static readonly ANGULAR=new Tag('Angular','red')
  static readonly TYPESCRIPT=new Tag('Typescript','pink')
  static readonly PYTHON=new Tag('python','cyan')
  static readonly CSHARP=new Tag('C#','aqua')
  static readonly JAVA=new Tag('Java','orange')
  static readonly NODEJS=new Tag('NodeJS','greenyellow')
  static readonly ASPNET=new Tag('ASP.NET','purple')
  static readonly JAVASCRIPT=new Tag('JS','yellow')
  static readonly REACT=new Tag('react','blue')
  private constructor(private readonly key:string,public readonly color:string){

  }
  toString(){
    return this.key;
  }
}
