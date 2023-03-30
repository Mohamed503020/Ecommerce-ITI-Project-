import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  private stepOneSource: Subject<FormGroup> = new Subject();
  stepOne: Observable<FormGroup> = this.stepOneSource.asObservable();

  private stepTwoSource: Subject<FormGroup> = new Subject();
  stepTwo: Observable<FormGroup> = this.stepTwoSource.asObservable();

  mainForm: FormGroup = this._formBuilder.group({
    city: '',
    governate: '',
    street:'',
    mobile:'',
    shaping_address: '',
    pinCode: '',
    number: '',
    exp_month: '',
    exp_year: '',
    cvc: '',
    amount:'',
    description:''

  })

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.stepOne.subscribe(form =>
      form.valueChanges.subscribe(val => {
        this.mainForm.value.city = val.city
        this.mainForm.value.governate = val.governate
        this.mainForm.value.street = val.street
        this.mainForm.value.mobile = val.mobile 
        this.mainForm.value.shaping_address = val.shaping_address
        // this.mainForm.value.extraName = val.extraName
      })
    )
    this.stepTwo.subscribe(form =>
      form.valueChanges.subscribe(val => {
        // console.log(val)
        this.mainForm.value.number = val.number
        this.mainForm.value.exp_month = val.exp_month
        this.mainForm.value.exp_year = val.exp_year
        this.mainForm.value.cvc = val.cvc 
        this.mainForm.value.amount = val.amount  
        this.mainForm.value.description = val.description  
      })
    )
  }

  stepReady(form: FormGroup, part: string) {
    switch (part) {
      case 'one': {
        this.stepOneSource.next(form);
        break;
      }
      case 'two': {
        this.stepTwoSource.next(form);
        break;
      }
      default: {
        // handle invalid part value
        break;
      }
    }
  }
}
