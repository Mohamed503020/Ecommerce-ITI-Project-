import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductcategoryComponent {
  products :any[]=[];
  constructor(
    private _ProductService:ProductService,
    private _ActivatedRoute:ActivatedRoute,

  ){}

}
