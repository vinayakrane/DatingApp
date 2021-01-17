import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  //via this import now everything in the shared module is going 
  //to be available to our components
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    ToastrModule .forRoot({
      positionClass:'toast-bottom-right'
    })
  ],
  //we also need to do is add another array in here for the exports,
  //since the inputs to be available everywhere else
  exports:[
    BsDropdownModule,
    ToastrModule
  ]
})
export class SharedModule { }
