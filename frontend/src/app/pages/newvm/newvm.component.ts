import { Component, OnInit } from '@angular/core';
import { VM } from '../../models/vm';
import {VmService} from '../../services/vm.service'

@Component({
  selector: 'app-newvm',
  templateUrl: './newvm.component.html',
  styleUrls: ['./newvm.component.css']
})
export class NewvmComponent implements OnInit {

  constructor(public service:VmService) { }

  ngOnInit(): void {
    alert("Simulation de connection : just click Ok")
  }

  addVm(name,ip,os){
    this.service.addVms(new VM(name.value,ip.value,os.value,false))
    name.value = "";
    ip.value = "";
    os.value = "";
    alert("done");
  }
}
