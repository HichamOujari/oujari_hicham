import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListVmComponent } from './pages/list-vm/list-vm.component';
import { NewvmComponent } from './pages/newvm/newvm.component';

@NgModule({
  declarations: [
    AppComponent,
    ListVmComponent,
    NewvmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
