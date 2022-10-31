import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  [x: string]: any;
  products: any = [];
  CustomerId = localStorage.getItem('userId');
  store: [] = [];
  value1: any;
  value: any;
  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    let data = {
      fasion: 'all',
    };
    this.service.getProducts(data).subscribe((response) => {
      console.log(response.products);
      this.products = response.products;
    });
  }

  addToCart(items: any) {
    console.log(items);
    let data = {
      productId: items.id,
      customerid: this.CustomerId,
      name: items.name,
      fashion: items.fashion,
      price: items.price,
      image: items.image,
      date: Date.now(),
    };
    this.service.AddToCart(data).subscribe((response) => {
      console.log(response.conformedOrder);

      this.service.headerClicked.next(response.conformedOrder);
    });
  }
  // ..............................................
  onSelectedPrice(item1: any) {
    this.value1 = item1;

    let value = {
      price: item1,
    };
    console.log(this.value1);
    this.service.getProducts(value).subscribe((response) => {
      console.log(response.products);
      this.products = [];
      this.products = response.products;
      this.store = [];
    });
  }
  selectFilter(item1: any) {
    this.value = item1;
    let find = item1;
  }

  search(form: NgForm) {
    console.log(form);
    let search = {
      data: this.value,
      find: form.value.Name,
    };

    search.data = this.value;
    console.log(search);

    this.service.getProducts(search).subscribe((response) => {
      console.log(response.getSearchedProduct);
      this.products = [];
      this.products = response.getSearchedProduct;
      this.store = [];
    });
  }
}
