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
    firstName: '',
    lastName: '',
    phoneNumber: '',
    country: '',
    street:'',
    shoppingAddress:'',
    cardNum: '',
    expyear: '',
    expmonth: '',
    cvc: '',

  })

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.stepOne.subscribe(form =>
      form.valueChanges.subscribe(val => {
        this.mainForm.value.firstName = val.firstName
        this.mainForm.value.lastName = val.lastName
        this.mainForm.value.phoneNumber = val.phoneNumber
        this.mainForm.value.country = val.country 
        this.mainForm.value.street = val.street
        this.mainForm.value.shoppingAddress = val.shoppingAddress
        // this.mainForm.value.extraName = val.extraName
      })
    )
    this.stepTwo.subscribe(form =>
      form.valueChanges.subscribe(val => {
        // console.log(val)
        this.mainForm.value.cardNum = val.cardNum
        this.mainForm.value.expyear = val.expyear
        this.mainForm.value.expmonth = val.expmonth
        this.mainForm.value.cvc = val.cvc
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
