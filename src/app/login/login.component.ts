import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private router: Router) { }
  username: string
  password: string
  
  login() {
    if (this.username == "Admin" && this.password == "Password") {
      console.log("hi")
       //window.location.href= '/new';
      //this.router.navigate(['/pass']);
      this.router.navigate(['/home']);
      //return true;

    }
    else {
      alert("Invalid User")
    }
  }

 

    

   
    

  }
