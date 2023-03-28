import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../../service/formService.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  step: FormGroup

  constructor(
    private _formBuilder: FormBuilder,
    private formService: FormServiceService
  ) {
    this.step = this._formBuilder.group({
      number: ['', Validators.required],
      exp_month: ['', Validators.required],
      exp_year: ['', Validators.required],
      cvc: ['', Validators.required],
      amount: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.formService.stepReady(this.step, 'two')
  }

  ngOnInit() {
  }

}
