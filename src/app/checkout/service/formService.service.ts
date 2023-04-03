import { Injectable, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService  implements OnInit{
  amount!:number

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
    amount: '',

  })

  constructor(
    private _formBuilder: FormBuilder,private _HttpClient:HttpClient
  ) {
    this.stepOne.subscribe(form =>
      form.valueChanges.subscribe(val => {
        this.mainForm.value.city = val.city
        this.mainForm.value.governate = val.governate
        this.mainForm.value.street = val.street
        this.mainForm.value.mobile = val.mobile 
        this.mainForm.value.shaping_address = val.shaping_address
        this.mainForm.value.pinCode = val.pinCode
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
      })
    )
  }
  ngOnInit(): void {
    this.amount= JSON.parse(localStorage.getItem('paymentTotalPrice')!)
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



  

crearteOrder(data: any): Observable<any>{
  const token = localStorage.getItem('token');
  // console.log(token);
  
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
  };
  return this._HttpClient.post<any>(`http://localhost:8000/api/users/createorder`,data, httpOptions);
  }

cartProduct():Observable<any>{
  const token = localStorage.getItem('token');
  // console.log(token);
  
  const httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${token}`
    })
  };
  return this._HttpClient.get<any>(`http://localhost:8000/api/users/showUserCard`,httpOptions); 
}
}
