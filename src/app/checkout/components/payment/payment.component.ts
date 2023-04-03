import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  OnChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../../service/formService.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() totalPrice!: number;
  step!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private formService: FormServiceService
  ) {}
  ngAfterViewInit(): void {
    // this.step.get('amount')?.setValue(this.totalPrice);
  }
  ngOnChanges() {
    this.step.get('amount')?.setValue(this.totalPrice);

    // console.log(changes);
  }
  ngOnInit() {
    // this.step.get('amount')?.patchValue(this.totalPrice);
    console.log(this.totalPrice);
    localStorage.setItem('paymentTotalPrice', JSON.stringify(this.totalPrice));
    this.step = this._formBuilder.group({
      // number: ['', Validators.required],
      // exp_month: ['', Validators.required],
      // exp_year: ['', Validators.required],
      // cvc: ['', Validators.required],

      number: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      exp_month: ['', [Validators.required, Validators.pattern(/^\d{1,2}$/)]],
      exp_year: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      cvc: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      amount: ['', Validators.required],
    });
    this.step.get('amount')?.patchValue(this.totalPrice);
    this.formService.stepReady(this.step, 'two');
  }

  get number() {
    return this.step.get('number');
  }
  get exp_month() {
    return this.step.get('exp_month');
  }
  get exp_year() {
    return this.step.get('exp_year');
  }
  get cvc() {
    return this.step.get('cvc');
  }
}
