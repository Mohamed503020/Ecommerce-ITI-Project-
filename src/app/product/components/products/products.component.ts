import { Product } from './../../model/product';
import { HotToastService } from '@ngneat/hot-toast';
import { Component, Input } from '@angular/core';
import { WishlistService } from 'src/app/wishlist-list/services/wishlist.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Input() product: Product = {} as Product;
  logged: boolean = false;
  wishlistItem: any;

  // isAlert=true
  // alertmsg=`product added successfully`
  constructor(
    private _CartService: CartService,
    private _toast: HotToastService,
    private _WishlistService: WishlistService,
    private _authsrv: AuthService,
    private _router: Router,
    private _ProductService: ProductService,


  ) { }
  ngOnInit(): void {
    this._WishlistService.getAllWishlist().subscribe({
      next: (data) => {
        this.wishlistItem = data
      }
    });
  }
  addProductToWishList(id: any) {
    if(localStorage.getItem('token')){

    this._WishlistService.AddItemWishlist(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log("Done");
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Product Added Succefully ',
          showConfirmButton: false,
          timer: 2500
        })
      },
      error: (err) => {
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
  }

  addProductToCart(id: any) {
    if(localStorage.getItem('token')){
      this._CartService.AddItemCart(id).subscribe({
        next: (res) => {
          console.log(res);
          console.log("Done");
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product added Succefully ',
            showConfirmButton: false,
            timer: 2500
          })
        },
        error: (err) => {
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
    else{
      this._router.navigateByUrl("/auth/login")
    }

  }
  // logout() {
  //   this._authsrv.islogin.next(false);

  // }

  // if (!this._authsrv.login) {
  //   this._router.navigateByUrl("/auth/login")
  // } else {
  //   this._CartService.AddItemCart(id);
  // }
}
