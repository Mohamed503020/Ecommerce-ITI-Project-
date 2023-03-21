import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email?: string;
  password?: string;
  Fullname?: string;


  onSubmit(item: any) {
    console.log(item);

  }
}

