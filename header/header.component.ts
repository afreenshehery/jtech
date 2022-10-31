import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ProductsComponent } from '../components/products/products.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  count: any;
  constructor(private service: ServiceService) {
    service.headerClicked.subscribe((product: ProductsComponent) => {
      console.log(product, 'hello');

      this.count = product;
    });
  }

  ngOnInit(): void {
    this.count;

    this.count = localStorage.getItem('count');
  }
}

// loop code for future///////////////
// let array = response.conformedOrder;
// let element = [];
// for (let index = 0; index < array.length; index++) {
//   element.push(array[index].quantity);
//   console.log(element);
// }

// const initialValue = 0;
// const sumWithInitial = element.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );
