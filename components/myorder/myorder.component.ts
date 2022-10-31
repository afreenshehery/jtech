import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.css'],
})
export class MyorderComponent implements OnInit {
  constructor(private service: ServiceService) {}
  userId: any;
  oders: any = [];
  order = [];
  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');

    let data = {
      id: this.userId,
    };
    console.log(data);

    this.service.orderDetails(data).subscribe((response: any) => {
      // conformedOrder
      console.log(response.Confirm);

      this.oders = response.conformedOrder;
    });
  }
}
