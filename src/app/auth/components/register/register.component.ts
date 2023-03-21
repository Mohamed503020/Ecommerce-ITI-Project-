import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 userData:User={} as User
constructor(
  private _authSeevice:AuthService,
  private _router:Router
){}

 saveUser(){
this._authSeevice.register(this.userData).subscribe({
  next:(data)=>{
    console.log(data);
    this._router.navigateByUrl("/auth/register")
  },
  error:error=>alert(error.message)
})
console.log(this.userData)
 }

}

