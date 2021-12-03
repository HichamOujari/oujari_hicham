import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VM } from '../models/vm';

@Injectable({
  providedIn: 'root'
})
export class VmService {

  listVm:Array<any> = [];
  vmSubject = new Subject<any>();


  constructor(private http: HttpClient) { }


  getAllVms() {
    this.http.get<Array<VM>>(environment["apiURL"]+"/vm").subscribe(vms=>{
      this.listVm = vms;
      this.emitVmsSubject()
    })
  }

  emitVmsSubject(){
    this.vmSubject.next(this.listVm)
  }

  addVms(vm:VM) {
    return this.http.post<VM>(environment["apiURL"]+"/vm",vm).subscribe(rsp=>console.log(rsp))
  }


  updateVms(newstate,name){
    return this.http.post<VM>(environment["apiURL"]+"/vm/update",{"name":name,"newState":newstate})
  }
}
