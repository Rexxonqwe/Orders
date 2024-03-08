import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { OrdersService } from './orders.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  public resourceBundle: any;

  constructor(public ordersService: OrdersService){}

  public decrement(product: any){
    for(let i = 0; i < this.ordersService.products.length; i++)
    {
      if(this.ordersService.products[i].name === product.name && this.ordersService.products[i].qauntity > 0){
        this.ordersService.products[i].qauntity--;
      }
    }

    console.log(this.ordersService.products);
  }

  public increment(product: any){
    for(let i = 0; i < this.ordersService.products.length; i++){
      if(this.ordersService.products[i].name === product.name){
        this.ordersService.products[i].qauntity++;
      }
    }
  }
  
}
