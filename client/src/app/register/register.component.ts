import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private accountService: AccountService, private toastr:ToastrService) {}
  @Output()cancelRegister= new EventEmitter();
  @Output()cancelRegister1= new EventEmitter();
  model: any = {};
  
  ngOnInit(): void {}

  register() {
    this.accountService.register(this.model).subscribe(response=>{
      console.log(response);
this.cancel();
    }, error =>{
      console.log(error);
      this.toastr.error(error.error);
    })
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
