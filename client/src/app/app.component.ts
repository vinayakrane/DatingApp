import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'The Dating App';
  users: any;
  //When we use this any keyword, we're effectively turning off type safety in typescript.
  //ie it can be a nuumber, string, date etc
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe(Response => {
      this.users = Response;
    },error=>{
      console.log(error);
    });
  }
}
