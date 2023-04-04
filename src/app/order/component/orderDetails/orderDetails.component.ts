import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/checkout/components/order/services/order.service';
import { AllOrdersService } from '../../allOrders.service';
interface OrderDetail{
  id: number;
  name:string,
  mobile:string,
  payment_status:string,
  order_products: {
    id: number;
    order_id: number,
    product_id: number,
    quantity: number,
    price: number,
    product: {
      id: number;
      name: string;
      description: string,
      rate: number,
      price: number,
      quantity: number,
      status: string,
      discount: number,
      category_id: number
      images:{
        imgPath:string,
      }[]
    }
  }[];
}
@Component({
  selector: 'app-orderDetails',
  templateUrl: './orderDetails.component.html',
  styleUrls: ['./orderDetails.component.css']
})

export class OrderDetailsComponent implements OnInit {


  now = new Date();
  twoDaysAfter: any;
  order: OrderDetail = {} as OrderDetail;
  orderId:number|any;
  constructor(private http: HttpClient,private orderService:AllOrdersService,private route: ActivatedRoute, private router: Router){

  }
  
  ngOnInit(): void {
    this.orderId=this.route.snapshot.paramMap.get('id');
    console.log(this.orderId);
    this.twoDaysAfter = new Date(
      this.now.setDate(this.now.getDate() + 3)
    );
  this.orderService.getOrderDetailUser(this.orderId).subscribe({
    next:(res)=>{
      this.order=res;
      // console.log(this.order);
      

    }
   })

  }

}
