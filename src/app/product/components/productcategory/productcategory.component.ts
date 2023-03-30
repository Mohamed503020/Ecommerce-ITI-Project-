import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent implements OnInit {
  productsOfCategory :any[]=[];
  cat!:any;

  constructor(
    private _ProductService:ProductService,
    private _ActivatedRoute:ActivatedRoute,

  ){}
  ngOnInit(): void {
        this._ActivatedRoute.params.subscribe(params => {
      this.cat= params['cat'];
      this.getProductsCategory()

    })
  }
  getProductsCategory() {
    this._ProductService.getProductsByCategory(this.cat).subscribe({
      next: (item) => { this.productsOfCategory = item },
      error: error => alert(error.message)
    })
  }

}
