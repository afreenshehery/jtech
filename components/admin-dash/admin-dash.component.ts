import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { ChartjsModule } from '@coreui/angular-chartjs';
import * as moment from 'moment';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css'],
})
export class AdminDashComponent implements OnInit {
  store: any = [];
  store1: any = [];
  showProject = false;
  projectInfo: any = [];
  showNextPage = false;
  showpreePage = false;
  array: any = [];
  count: any;

  // pagination............
  page: any = [];
  p: any = 1;
  limit: any = 4;

  // pagimation..........
  noprojectFound = false;
  sortPage: any = [];
  order: any = 'order';
  userId: any;
  files: any;
  data: any;
  counts: any = [];
  countss: any = [];
  graph: any = [];
  lable: any;

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.fetchdata();
  }

  fetchdata() {
    this.userId = localStorage.getItem('userId');

    let data = {
      id: this.userId,
    };
    console.log(data);

    this.service.admin(data).subscribe((response) => {
      this.store = response.Details;
      this.store1 = response.Confirm;

      console.log(this.store.length);
      this.counts = response.findTotalCount;

      this.graph[0] = response.findTotalCount;
      this.array = Array(Math.ceil(response.count / this.limit))
        .fill(0)
        .map((x, i) => i + 1);
      console.log(this.array);

      // this.graphs();
    });
  }

  deleteuser(userId: any) {}

  desendin(order: any) {}

  search(form: NgForm) {
    console.log(form);
    let search = {
      find: form.value.Name,
    };

    console.log(search);

    this.service.admin(search).subscribe((response) => {
      this.store = [];
      this.store1 = [];
      this.store = response.Details;
      this.store1 = response.Confirm;
      console.log(response.Confirm);
    });
  }

  page1(page: any) {}

  pagechange() {
    this.showNextPage = true;
    this.showpreePage = false;
  }

  changePage(page: any) {
    console.log(page);

    let limit = {
      limit: this.limit,
      page: page,
    };
    this.service.admin(limit).subscribe((response) => {
      console.log(response);
      this.store = [];
      this.store1 = [];
      this.store = response.Details;
      this.store1 = response.Confirm;
    });
  }
  prepagechange() {
    this.showpreePage = true;
    this.showNextPage = false;
  }

  changePageSize($event: any) {}

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.files = file;
    }
  }

  onupload(form: NgForm) {
    console.log(form.value);

    if (form.invalid) {
      return;
    }
    const data = new FormData();
    data.append('file', this.files);

    const uploaddata = {
      name: form.value.products,
    };
    data.append('body', JSON.stringify(uploaddata));
    {
      this.service.uploadProducts(data).subscribe(
        (response) => {
          console.log(response);
          alert('product list created');
        },
        (error) => {
          alert('ERRORRRRRR');
        }
      );
    }
    console.log(data);
  }

  selectFilter(item1: any) {
    console.log(item1);

    // this is an array containing the items

    // var1=coolVarParts[0];
    // let data1 = JSON.parse(item1);
    // // console.log(data1);
    // let subs = item1.split( );
    // log
    let data = {
      findDAt: item1,
    };

    this.service.admin(data).subscribe((response) => {
      console.log(response.grouth);
      console.log(response.findTotalCount);
      this.lable = response.lable;
      // console.log(response.date);

      this.graph[1] = response.grouth;

      // this.graph[3] = response.date;

      console.log(this.graph);
      this.graphs();
    });
  }

  filters: any = {
    selectedUpcomingDates: 'thisweek',
    selectedDates: '30,0,date',
    selectedLabel: '',
  };
  selectedDateRange = [];
  startDate: any;
  endDate: any;

  groupDates = [
    {
      label: 'Day',
      value: 'day',
      items: [
        { label: 'Today', value: '0,0,date,today' },
        { label: 'Yesterday', value: '1,1,date,Yesterday' },
      ],
    },
    {
      label: 'Week',
      value: 'week',
      items: [
        { label: 'This Week', value: '0,0,week,this week' },
        { label: 'Last Week', value: '1,1,week,Last Week' },
      ],
    },
    {
      label: 'Month',
      value: 'month',
      items: [
        { label: 'This Month', value: '0,0,month, This Month' },
        { label: 'Last Month', value: '1,1,month,Last Month' },
      ],
    },
    {
      label: 'Year',
      value: 'year',
      items: [
        { label: 'This Year', value: '0,0,year,This Year' },
        { label: 'Last Year', value: '1,1,year,Last Year' },
      ],
    },
  ];

  Fetchdetails() {
    let fromDate, toDate;
    console.log(this.filters.selectedDates);

    let startRange = this.filters.selectedDates.split(',')[0];
    let endRange = this.filters.selectedDates.split(',')[1];
    let label = this.filters.selectedDates.split(',')[3];
    // console.log(this.filters.selectedDates.split(',')[3]);

    console.log(startRange, 'ss', endRange, 'ee');

    if (this.filters.selectedDates.includes('date')) {
      fromDate = new Date(
        moment().subtract(startRange, 'days').startOf('days').format()
      );
      toDate = new Date(
        moment().subtract(endRange, 'days').endOf('days').format()
      );

      console.log(fromDate, 'fromdate', toDate, 'todate');
    } else if (this.filters.selectedDates.includes('week')) {
      fromDate = new Date(
        moment().subtract(startRange, 'week').startOf('week').format()
      );
      toDate = new Date(
        moment().subtract(endRange, 'week').endOf('week').format()
      );
      console.log(fromDate, 'fromdate', toDate, 'todate');
    } else if (this.filters.selectedDates.includes('month')) {
      fromDate = new Date(
        moment().subtract(startRange, 'month').startOf('month').format()
      );
      toDate = new Date(
        moment().subtract(endRange, 'month').endOf('month').format()
      );
      console.log(fromDate, 'fromdate', toDate, 'todate:Month');
    } else if (this.filters.selectedDates.includes('year')) {
      fromDate = new Date(
        moment().subtract(startRange, 'year').startOf('year').format()
      );
      toDate = new Date(
        moment().subtract(endRange, 'year').endOf('year').format()
      );
      console.log(fromDate, 'fromdate', toDate, 'todate:Year');
    }
    console.log(fromDate);
    console.log(toDate);
    console.log(label);
    this.lable = label;

    let data = {
      fromDate: fromDate,
      toDate: toDate,
    };
    this.service.admin(data).subscribe((response) => {
      console.log(response.grouth);
      console.log(response.findTotalCount);
      console.log(response.lable);
      // this.lable = response.lable;

      this.graph[0] = response.findTotalCount;
      this.graph[1] = response.grouth;

      console.log(this.graph);
      this.graphs();
    });
  }
  graphs() {
    this.data = {
      labels: ['total subscribers', this.lable],
      datasets: [
        {
          // label: ['total subscribers', this.lable + ' ' + 'grouth'],

          backgroundColor: ['green', 'blue', 'red', 'gray'],

          data: this.graph,
        },
      ],
    };
  }
}
