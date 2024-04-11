import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  // constructor(
  //   private authService : AuthService,
  //   private router : Router
  //   ){}

  // onLogin(loginForm : NgForm){
  //   console.log(loginForm.value);
  //   const token = this.authService.authUser(loginForm.value);
  //   if(token){
  //     localStorage.setItem('token',token.email);
  //     console.log("Logged in");
  //     this.router.navigate(['/']);
  //   }
  //   else{
  //     console.log("Not Logged");
  //   }
  // }
}
