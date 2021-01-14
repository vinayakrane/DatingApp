import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_Services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private accountService: AccountService) {}
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
    })
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
