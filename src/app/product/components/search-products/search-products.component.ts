import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent implements OnInit {
  ProductsearchResults:any;
  serchRTxt:any;
  resultkey: boolean=false;
constructor(
private _ProductService:ProductService,
private _ActivatedRoute:ActivatedRoute
){



  }
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params => {
      this.serchRTxt= params['name'];
      this.getSearchedProduct()

    })
  }
  getSearchedProduct(){
    this._ProductService.getproductsearch(this.serchRTxt).subscribe({
      next: (item) => { this.ProductsearchResults = item ; this.resultkey=true },
      error: error => alert(error.message)
    })
  }
}
