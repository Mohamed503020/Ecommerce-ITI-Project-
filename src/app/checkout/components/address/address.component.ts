import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormServiceService } from '../../service/formService.service';


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  step: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private formService: FormServiceService
  ) {
    this.step = this._formBuilder.group({
      city: ['', Validators.required],
      governate: ['', Validators.required],
      street: ['', Validators.required],
      mobile: ['', Validators.required],
      shaping_address: ['', Validators.required],
      pinCode: ['', Validators.required],
      // shoppingAddress: ''
      // extraName: ''
    });
    this.formService.stepReady(this.step, 'one');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  change(title: any) {
    this.step.patchValue({ extraName: title });
  }
}
