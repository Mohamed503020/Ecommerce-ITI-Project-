import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit{

  editing = false;
 user:any;
  enableEdit() {
    this.editing = !this.editing;
  }
  constructor(private _router:Router){}
  // showPassword() {
  //   const passwordInput = document.getElementById('password') as HTMLInputElement;
  //   if (passwordInput.type === 'password') {
  //     passwordInput.type = 'text';
  //   } else {
  //     passwordInput.type = 'password';
  //   }
  // }
  ngOnInit(): void {

    if(localStorage.getItem('user')){
      this.user=JSON.parse(localStorage.getItem('user')!)
console.log(this.user)
    }
  }
  logout(){
    if(localStorage.getItem('user')){
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this._router.navigateByUrl('auth/login')
    }
  }
}
