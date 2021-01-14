import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users:any;
  
  constructor(private http:HttpClient) {}
  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers(){
    this.http.get("https://localhost:5001/api/users").subscribe(Allusers=> this.users=Allusers);
  }
  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(data:boolean){
    this.registerMode=data;
  }

}
