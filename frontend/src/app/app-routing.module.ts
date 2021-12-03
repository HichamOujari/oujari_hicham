import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVmComponent } from './pages/list-vm/list-vm.component';
import { NewvmComponent } from './pages/newvm/newvm.component';

const routes: Routes = [
  {path: '', component:ListVmComponent},
  {path: 'newvm', component:NewvmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
