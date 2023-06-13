import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url = "https://eee0-2409-40d1-1005-e462-574-7db9-d307-d084.in.ngrok.io";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  constructor(
    private http: HttpClient,
  ) { 
    this.email = '';
    this.password = '';
  }

  ngOnInit(): void {
  }

  login() {
   // create a function that will call the login api and pass the email and password by http service of the backend
   this.http.post(`${url}/login`, { email: this.email, password: this.password}).subscribe(res => {
     console.log(res);
   })
  }
}

