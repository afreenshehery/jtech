import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

import { ProductsComponent } from './components/products/products.component';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  headerClicked = new Subject<ProductsComponent>();

  url = environment.url;
  constructor(private http: HttpClient, private router: Router) {}

  uploadProducts(uploaddata: any) {
    return this.http.post<{}>(`${this.url}/uploadProducts`, uploaddata);
  }
  getProducts(uploaddata: any) {
    return this.http.post<{ products: any; getSearchedProduct: any }>(
      `${this.url}/getProducts`,
      uploaddata
    );
  }
  AddToCart(createdCart: any) {
    console.log(createdCart);

    return this.http.post<{ conformedOrder: any }>(
      `${this.url}/AddToCart`,
      createdCart
    );
  }

  getItemsToCart(customerId: any) {
    console.log(customerId, 'servc');

    return this.http.post<{ length: any; cartitem: any }>(
      `${this.url}/getICarditem`,
      customerId
    );
  }
  ordered(order: any) {
    return this.http.post<{ data: any }>(`${this.url}/placeorder`, order, {});
  }
  signUp(authData: any) {
    return this.http.post<{ userId: any; token: any }>(
      `${this.url}/signUp`,
      authData,
      {}
    );
  }

  login(authData: any) {
    return this.http.post<{ userId: any; token: any; status: any }>(
      `${this.url}/logIn`,
      authData,
      {}
    );
  }

  orderDetails(order: any) {
    return this.http.post<{ conformedOrder: any }>(
      `${this.url}/orderDetails`,
      order,
      {}
    );
  }

  getNavCard(order: any) {
    return this.http.post<{ conformedOrder: any }>(
      `${this.url}/getNavCard`,
      order,
      {}
    );
  }

  admin(order: any) {
    return this.http.post<{
      Details: any;
      Confirm: any;
      count: any;
      date: any;
      month: any;
      year: any;
      grouth: any;
      lable: any;
      findTotalCount: any;
    }>(`${this.url}/admin`, order, {});
  }
}
