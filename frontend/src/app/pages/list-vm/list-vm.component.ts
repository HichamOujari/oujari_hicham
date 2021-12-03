import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VM } from '../../models/vm';
import {VmService} from '../../services/vm.service'

@Component({
  selector: 'app-list-vm',
  templateUrl: './list-vm.component.html',
  styleUrls: ['./list-vm.component.css']
})
export class ListVmComponent implements OnInit {

  listVM:Array<VM> = [
  ];
  vmsSubscription: Subscription = new Subscription();
  constructor(public service: VmService,) { }

  ngOnInit(): void {
    this.getAllVms()
  }

  getAllVms(){
    this.service.getAllVms();
    this.vmsSubscription = this.service.vmSubject.subscribe((rsp) => {
      this.listVM = rsp;
    })
    this.service.emitVmsSubject()
  }

  setUpState(currentState,name){
    var newState ;
    if(currentState=="false")  newState = true
    else newState =  false
    this.service.updateVms(newState,name).subscribe(data =>this.getAllVms())

  }

}
