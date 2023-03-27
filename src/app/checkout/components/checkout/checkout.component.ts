import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormServiceService } from '../../service/formService.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
stepper: any;
stepTwo: any;
stepOne: any;
  ngOnInit() {
  }
  isLinear = false;
  myForm: Array<string>

  constructor(
    public formService: FormServiceService,
    private fb: FormBuilder
  ) {
    this.myForm = this.formService.mainForm.value
  }

  keys() : Array<string> {
    return Object.keys(this.myForm);
  }
}
