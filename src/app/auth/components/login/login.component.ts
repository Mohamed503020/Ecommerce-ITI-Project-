import { Login } from './../../model/login';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  user!:any;
  token!:string;
errorAuthLogin=''
  constructor(
    private _authService:AuthService,
    private _router:Router
  ){

  }


  ngOnInit(): void {
  }
  Userlogin() {

 const loginModel:Login={
    email:this.email,
    password:this.password
  }
    console.log(loginModel)
    this._authService.login(loginModel).subscribe({
      next:data=>{
        console.log(data)
        this.user=data[0]
        this.token=data[1]
        if(localStorage.getItem('token')){
        localStorage.setItem('token',this.token)
        localStorage.setItem('user',JSON.stringify(this.user) )
        }
         localStorage.setItem('token',this.token)
        localStorage.setItem('user', JSON.stringify(this.user))
        this._router.navigateByUrl('/')
      },

      error:error=>{
        this.errorAuthLogin='Invalid Email Or PassWord'
        console.log(error.error)}
    })
  }
}
