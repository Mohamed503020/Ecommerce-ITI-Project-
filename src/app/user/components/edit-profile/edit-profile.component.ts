import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditProfileService } from '../../service/edit-profile.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(
    private _editProfileService:EditProfileService,
    private _router:Router,
    private formBuilder: FormBuilder
    ){}
  registerForm!: FormGroup
  selectedImage!: File;
 
userdata:any={};
 

  
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],  
      image:['', Validators.required],
    });
    var data= localStorage.getItem('user')
    if(data){
      this.userdata= JSON.parse(data)
      // let user={
      //   name:dataname
      // }
      this.registerForm.get('name')?.setValue(this.userdata.name);
      this.registerForm.get('email')?.setValue(this.userdata.email);
      this.registerForm.get('gender')?.setValue(this.userdata.gender);
      console.log("this data from local");
      console.log(this.userdata);
    }  
  }
  onFileSelected(event:any){
    console.log(event);
    this.registerForm.patchValue({image:event.target.files[0]});
    
  }
  onSubmit() {
    const formData = new FormData();
  console.log(this.registerForm.value);
  
    formData.append('name', this.registerForm.get('name')?.value);
    formData.append('email', this.registerForm.get('email')?.value);
    formData.append('gender', this.registerForm.get('gender')?.value);
    formData.append('image', this.registerForm.get('image')?.value);
    this._editProfileService.editProfileData(formData).subscribe({
      next:(data)=>{
        console.log(data);
        let userData = JSON.parse(localStorage.getItem('user') || '{}');
        userData.name = data.name;
        userData.email = data.email;
        userData.image = data.image;
        userData.gender = data.gender;
        userData.updated_at = data.updated_at;
        localStorage.setItem('user', JSON.stringify(userData));
        this._router.navigateByUrl("/main/user");
        Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Profile Edit Succefully ',
                showConfirmButton: false,
                timer: 2500
              })
      },
      error:error=>alert(error.message)
    })  // You can submit the form to a server or do any other action here.
  }
}
