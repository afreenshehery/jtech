import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  cart: any = [];
  total: number = 0;
  customerId: any;
  userid: any;
  show = false;
  hide = true;
  grandtotal: number = 0;

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    console.log();

    this.fetchCart();
  }
  fetchCart() {
    let customerId = {
      id: localStorage.getItem('userId'),
    };
    this.service.getItemsToCart(customerId).subscribe((response) => {
      console.log(response.cartitem);

      let array = response.cartitem;
      let element = [];

      this.cart = response.cartitem;

      for (let index = 0; index < array.length; index++) {
        element.push(array[index].quantity);
        console.log(element);
      }

      const initialValue = 0;
      const sumWithInitial = element.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );

      console.log(sumWithInitial);
      let storeCount = localStorage.setItem('count', sumWithInitial);

      this.total;

      this.service.headerClicked.next(sumWithInitial);
      this.total = 0;
      this.cart.forEach(
        (el: { price: any }) => (this.total = el.price + this.total)
      );
      console.log(this.total);
      this.grandtotal = this.total + 100;
      console.log(this.grandtotal);
    });
  }
  placeorder() {
    this.show = true;
    this.hide = false;
  }
  onDelete(id: any) {}

  ordered() {
    let order = {
      customerid: localStorage.getItem('userId'),
      total: this.grandtotal,
      Date: Date.now(),
    };
    console.log(order);
    this.service.ordered(order).subscribe((response) => {
      console.log(response);
      alert('order Confirmed');
      this.router.navigate(['/']);
    });
  }
  QuantityRemove(proId: any) {
    console.log(proId);
    let productsId = {
      productId: proId,
      String: 'Remove',
      customerid: localStorage.getItem('userId'),
    };
    this.service.getItemsToCart(productsId).subscribe((response) => {
      console.log(response.cartitem);

      this.service.headerClicked.next(response.cartitem);
      this.fetchCart();
    });
  }
  QuantityAdd(proId: any) {
    console.log(proId);
    let productsId = {
      productId: proId,
      String: 'Add',
      customerid: localStorage.getItem('userId'),
    };
    this.service.getItemsToCart(productsId).subscribe((response) => {
      console.log(response.cartitem);

      this.total;

      this.service.headerClicked.next(response.cartitem);
      this.fetchCart();
    });
  }
}
