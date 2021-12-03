export class VM{
  name:string;
  ip:string;
  os:string;
  state:boolean;

  constructor(name:string, ip:string,os:string,state:boolean){
    this.name=name;
    this.ip=ip;
    this.os=os;
    this.state=state;
  }

}
