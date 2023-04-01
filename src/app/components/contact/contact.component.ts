import { Component } from '@angular/core';
import { ContactService } from './contact.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
 fn!:string;
 ln!:string;
 em!:string;
 m!:string;

constructor(private _contactSevice:ContactService){}



  onSubmit(): void {
  }
  sendData(fn:string,ln:string,email:string,m:string){
    console.log(fn);
    console.log(ln);
    console.log(email);
    console.log(m);
    this._contactSevice.sendMessage(fn,ln,email,m).subscribe({
      next:(res)=>{
        console.log(res);
        console.log("send Done");
      },
      error:(err)=>{
        console.log(err);
        console.log("errror need fix");
      }
    })
  }
  // addProductToWishList(id:any){
  //   this._WishlistService.AddItemWishlist(id).subscribe({
  //     next:(res)=>{
  //       console.log(res);
  //       console.log("Done");
  //     },
  //     error:(err)=>{
  //       console.log(err);
  //       console.log("errrrrrrrrrror");
  //     }
  //   })
}
