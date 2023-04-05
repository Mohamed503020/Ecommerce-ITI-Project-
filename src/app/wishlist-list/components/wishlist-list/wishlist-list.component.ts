import { WishlistService } from './../../services/wishlist.service';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.css']
})
export class WishlistListComponent implements OnInit,AfterContentChecked {
  
  route="Wishlist"
  productInWhislis:any=[];
  empty:boolean=false
  constructor(
    private _wishlisService:WishlistService,
    private _CartService:CartService,
    ){

  }
  ngAfterContentChecked(): void {
    let wishlistItem=localStorage.getItem('wishlistPrd');
    if(wishlistItem=='0'){
      this.empty=true
      this.productInWhislis=[];
     }
  }

  ngOnInit(): void {
    this.getProductFromWishlist();
    console.log(this.productInWhislis);
  }

  getProductFromWishlist(){
    this.productInWhislis=this._wishlisService.getAllWishlist().subscribe({
      next:(res)=>{
        this.productInWhislis=res;
        console.log(this.productInWhislis)
        console.log("result done")
      },
      error:(err)=>{
        console.log(err)
        console.log("errorrrrrrrrrrrr")
      }

    });
  }

  addProductToCart(id:any){
    this._CartService.AddItemCart(id).subscribe({
      next:(res)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Product added Successfully ',
          showConfirmButton: false,
          timer: 2500,
        });
        let cartItemlength = parseInt(localStorage.getItem('cartItemlength') || '0');
        cartItemlength += 1;
        localStorage.setItem('cartItemlength', cartItemlength.toString());
        // this.removeProductFromWishlist(id)
      },
      error:(err)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'product already existed',
          showConfirmButton: false,
          timer: 2500
        })
      }
    })
  }

  removeProductFromWishlist(productId: any){
    this._wishlisService.DeleteItemWishlist(productId).subscribe({
      next:(res)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Product deleted Succefully ',
          showConfirmButton: false,
          timer: 2500
        })
        this.getProductFromWishlist();
        
      },
      error:(err)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Product deleted Succefully',
          showConfirmButton: false,
          timer: 2500
        })
        this.getProductFromWishlist();        
      }
      
    });
    let wishlistPrd = parseInt(localStorage.getItem('wishlistPrd') || '0');
    if(wishlistPrd>0){
      wishlistPrd -= 1;
      localStorage.setItem('wishlistPrd', wishlistPrd.toString());
    }
  }

}
