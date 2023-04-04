import { ProductService } from './../../../product/services/product.service';
import { WishlistService } from './../../../wishlist-list/services/wishlist.service';
import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  sticky: boolean = false;
  params: any;
  searchText: string = '';
  constructor(
    private _cartService: CartService,
    private _wishlistService: WishlistService,
    private _productService: ProductService,
    private router: Router,
    private _authsrv: AuthService
  ) {}
  cartitem: any;
  cartLength: any;
  wishlistItem: any;
  allproducts: any;
  searchQuery = '';
  searchResults: any;
  categories: any;
  category: string = 'all';
  logged: boolean = false;
  cat!: string;
  userImage:any;
  //header stiky
  ngAfterContentChecked(): void {
    this.cartLength = localStorage.getItem('cartItemlength');
    this.wishlistItem = localStorage.getItem('wishlistPrd');
  }



  //header stiky
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= 300) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }
  ngOnInit(): void {
    this._cartService.getAllCartPrd().subscribe({
      next: (res) => {
        if (localStorage.getItem('token') && res.length) {
          localStorage.setItem('cartItemlength', res.length);
        } else {
          localStorage.setItem('cartItemlength', '0');
        }
      },
      error: () => {
        localStorage.setItem('cartItemlength', '0');
      },
    });
    this._wishlistService.getAllWishlist().subscribe({
      next: (res) => {
        if (localStorage.getItem('token') && res.length) {
          localStorage.setItem('wishlistPrd', res.length);
        } else {
          localStorage.setItem('wishlistPrd', '0');
        }
      },
      error: () => {
        localStorage.setItem('wishlistPrd', '0');
      },
    });

    this.getAllProductFromCart();
    this._wishlistService.getAllWishlist().subscribe({
      next: (data) => {
        this.wishlistItem = data;
      },
    });

    if (localStorage.getItem('user')) {
      this.logged = true;
      this.userImage = JSON.parse(localStorage.getItem('user')!).image
    } else {
      this.logged = false;
    }
    this.getallcategory();
  }
  selectCategory(cate: string) {
    console.log(cate);
    if (cate === 'all') {
      this.router.navigateByUrl('/main/products');
    } else {
      this.router.navigateByUrl(`/main/products/productcategory/${cate}`);
    }
  }

  getAllProductFromCart(){
    this._cartService.getAllCartPrd().subscribe({
      next:(res)=>{
        this.cartitem=res;

      }
    })
  }

  getallcategory() {
    this._productService.getAllCategory().subscribe({
      next: (res) => {
        this.categories = res;
      },
      error: (error) => {
        alert(error.message);
      },
    });
  }
  searchProduct(seerchTxt: string) {
    this.router.navigateByUrl(`/main/products/search/${seerchTxt}`);
  }
  logout() {
    this._authsrv.islogin.next(false);
  }
}
