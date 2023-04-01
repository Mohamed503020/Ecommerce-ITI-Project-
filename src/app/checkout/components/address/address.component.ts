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
      // city: ['', Validators.required],
      // governate: ['', Validators.required],
      // street: ['', Validators.required],
      // mobile: ['', Validators.required],
      // shaping_address: ['', Validators.required],
      // pinCode: ['', Validators.required],


      city: ['', [Validators.required,Validators.pattern("^[a-zA-Z]{3,15}$")]],
      governate: ['', [Validators.required,Validators.pattern("^[a-zA-Z]{3,15}$")]],
      street: ['', [Validators.required, Validators.pattern("^(?=.{3,50}$)[a-zA-Z]+(\\s[a-zA-Z]+)*$")]],
      mobile: ['', [Validators.required, Validators.pattern("^[0-9]{11}$")]],
      shaping_address: ['', [Validators.required,Validators.pattern("^(?=.{1,200}$)[a-zA-Z]+(\\s[a-zA-Z]+)*$")]],
      pinCode: ['', [Validators.required, Validators.pattern("^[0-9]{1,10}$")]]







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


  get city() {
    return this.step.get('city');
  }
  get governate() {
    return this.step.get('governate');
  }
  get street() {
    return this.step.get('street');
  }
  get mobile() {
    return this.step.get('mobile');
  } 
  get shaping_address() {
    return this.step.get('shaping_address');
  }
  get pinCode() {
    return this.step.get('pinCode');
  }

  storeAdress(){
    localStorage.setItem('shoppingAdress', this.shaping_address?.value)

  }
}
