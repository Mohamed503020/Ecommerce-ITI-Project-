import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/user';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  selectedImage!: File;
  constructor(
    private _authSeevice: AuthService,
    private _router: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      image: ['', Validators.required],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(50),
        ],
      ],
      gender: ['', Validators.required],
    });
  }

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get gender() {
    return this.registerForm.get('gender');
  }
  get password() {
    return this.registerForm.get('password');
  }

  onFileSelected(event: any) {
    this.registerForm.patchValue({ image: event.target.files[0] });
  }
  onSubmit() {
    const formData = new FormData();
    console.log(this.registerForm.value);
    formData.append('name', this.registerForm.get('name')?.value);
    formData.append('email', this.registerForm.get('email')?.value);
    formData.append('password', this.registerForm.get('password')?.value);
    formData.append('gender', this.registerForm.get('gender')?.value);
    formData.append('image', this.registerForm.get('image')?.value);
    this._authSeevice.register(formData).subscribe({
      next: (data) => {
        console.log(data);
        this._router.navigateByUrl('/auth/login');
      },
      error: (error) => alert(error.message),
    });
  }
}
