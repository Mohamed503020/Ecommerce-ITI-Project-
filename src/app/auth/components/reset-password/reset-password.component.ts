import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  email = '';
  password = '';
  otp = ''
  data: any;
  // token = 'string';
  newPassword = '';
  vcode = '';
  constructor(private authService: AuthService, private _router: Router,
    private route: ActivatedRoute) { }

  onSubmit() {
    this.data = {
      email: this.email,
      otp: this.vcode,
      password: this.newPassword
    }
    this.authService.resetPassword(this.data).subscribe({
      next: (res) => {
        console.log(res);
        this._router.navigateByUrl("/auth/login")
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
