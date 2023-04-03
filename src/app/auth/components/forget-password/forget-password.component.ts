import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  email = '';
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private _router: Router
  ) {}
  onSubmit() {
    this.authService.forgotPassword(this.email).subscribe({
      next: (res: any) => {
        console.log(res);
        this._router.navigateByUrl('/auth/resetpassword');
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
