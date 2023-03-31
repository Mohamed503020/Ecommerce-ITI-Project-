import { HotToastService } from '@ngneat/hot-toast';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { FilterProductPipe } from 'src/app/product/pipes/filter-product.pipe';
import { filter } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  route = "Cart"
  ProductsInCart: any;
  subTotalPrice: number = 0;
  TAX = 20;
  TotalPrice: number = 0;
  totalProductPrice: number = 0;

  constructor(private _CartService: CartService) {
  }
  ngOnInit(): void {

    this.getProductFromCart()
    // console.log(this.ProductsInCart);
    // this.subTotalPrice
    // this.calcSubTotalPrice()
    // this.TotalPrice= this.subTotalPrice + this.TAX

  }
  // Swal.fire({
  //   title: 'Are you sure?',
  //   text: 'You will not be able to recover this data!',
  //   icon: 'warning',
  //   showCancelButton: true,
  //   confirmButtonText: 'Yes, delete it!',
  //   cancelButtonText: 'No, cancel!',
  //   reverseButtons: true
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     // Delete the data
  //   } else if (result.dismiss === Swal.DismissReason.cancel) {
  //     // Cancel the operation
  //   }
  // });
  ///////////////////////////////////////////////////////
  getProductFromCart() {
    this._CartService.getAllCartPrd().subscribe({
      next: (res) => {
        this.ProductsInCart = res;
        this.subTotalPrice = 0;
        this._CartService.cartItems.next(res)
        // this._CartService.cartItems.next(res);
        this.ProductsInCart.forEach((product: any) => {
          this.subTotalPrice += product.price * product.quantityCart;
        });
        this.TotalPrice = this.subTotalPrice + this.TAX;
        console.log("result done")
        localStorage.setItem('cartItemlength', this.ProductsInCart.length)
      }
    })
  }
  // getProductFromCart() {
  //   this._CartService.getAllCartPrd().subscribe({
  //     next: (res) => {
  //       this.ProductsInCart = res;
  //       this.subTotalPrice = 0;
  //       this.ProductsInCart.forEach((product: any) => {
  //         this.subTotalPrice += product.price * product.quantityCart;
  //       });
  //       this.TotalPrice = this.subTotalPrice + this.TAX;
  //       console.log("result done")
  //       localStorage.setItem('cartItemlength', this.ProductsInCart.length)
  //     }
  //   })
  // }

  deletProductFromCart(product: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      position: 'top-start',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete the data
        this._CartService.DeleteItemCart(product.id).subscribe({
          next: (res) => {
            // Swal.fire({
            //   position: 'top-end',
            //   icon: 'success',
            //   title: 'Product deleted Succefully ',
            //   showConfirmButton: false,
            //   timer: 2500
            // })
            console.log(res);
            console.log("done deleted");
            this.getProductFromCart();

          },
          error: (err) => {
            Swal.fire({
              position: 'top',
              icon: 'success',
              title: 'Product deleted Succefully ',
              showConfirmButton: false,
              timer: 2000
            })
            console.log(err);
            console.log("errrrrrrrrrrrrrrrreoroo");
            this.getProductFromCart();
          }
        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Cancel the operation
      }
    });
    // this._CartService.DeleteItemCart(product.id).subscribe({
    //   next: (res) => {
    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Product deleted Succefully ',
    //   showConfirmButton: false,
    //   timer: 2500
    // })
    // console.log(res);
    // console.log("done deleted");
    // this.getProductFromCart();

    // },
    // error: (err) => {
    // Swal.fire({
    //   position: 'top-end',
    //   icon: 'success',
    //   title: 'Product deleted Succefully ',
    //   showConfirmButton: false,
    //   timer: 2500
    // })
    // console.log(err);
    // console.log("errrrrrrrrrrrrrrrreoroo");
    // this.getProductFromCart();
    //     }
    //   });
  }

  increaseQuantitiy(id: number) {
    this._CartService.increaseQuantitiy(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log("increase done");
        this.getProductFromCart();
      },
      error: (err) => {
        console.log(err);
        console.log("error");
      }
    });
  }

  decreaseQuantitiy(id: number) {
    this._CartService.decreaseQuantitiy(id).subscribe({
      next: (res) => {
        console.log(res);
        console.log("decrease done");
        this.getProductFromCart();
      },
      error: (err) => {
        console.log(err);
        console.log("error");
      }
    });
  }
}



