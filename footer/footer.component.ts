import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  files: any;

  constructor(private service: ServiceService) {}
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
  ngOnInit(): void {}
}
