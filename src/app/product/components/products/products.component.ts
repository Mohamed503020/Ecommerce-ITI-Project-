import { Product } from './../../model/product';
import { HotToastService } from '@ngneat/hot-toast';
import { WishlistService } from './../../../wishlist-list/services/wishlist.service';
import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() product:Product={} as Product;

  constructor(
    private _CartService:CartService,
    private _WishlistService:WishlistService,
    private _toast:HotToastService
    ){

  }

  addProductToCart(id:any){
    this._CartService.AddItemCart(id).subscribe({
      next:(res)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Product added Succefully ',
          showConfirmButton: false,
          timer: 2500
        })
        console.log(res);
        console.log("Done");
        let cartItemlength = parseInt(localStorage.getItem('cartItemlength') || '0');
        cartItemlength += 1;
        localStorage.setItem('cartItemlength', cartItemlength.toString());
      },
      error:(err)=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'product already existed',
          showConfirmButton: false,
          timer: 2500
        })
        console.log(err);
        console.log("errrrrrrrrrror");
      }
    })
  }
  addProductToWishList(id:any){
    this._WishlistService.AddItemWishlist(id).subscribe({
      next:(res)=>{
        Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Product added Succefully ',
              showConfirmButton: false,
              timer: 2500
            })
        console.log(res);
        console.log("Done");
        let wishlistPrd = parseInt(localStorage.getItem('wishlistPrd') || '0');
        wishlistPrd += 1;
        localStorage.setItem('wishlistPrd', wishlistPrd.toString());
      },
      error:(err)=>{
        Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'product already existed',
              showConfirmButton: false,
              timer: 2500
            })
        console.log(err);
        console.log("errrrrrrrrrror");
      }
    })

  }
}
