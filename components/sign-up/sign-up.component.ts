import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {}
  onSignup(form: NgForm) {
    let formData: any = {
      Name: form.value.Name,
      Contact: form.value.Contact,
      Email: form.value.Email,
      Password: form.value.Password,
    };
    form.resetForm();
    this.service.signUp(formData).subscribe((response: any) => {
      console.log(response.token);
      localStorage.setItem('userId', response.userId);
      localStorage.setItem('token', response.token);
      alert('registered succesfully');
      this.router.navigate(['/']);
    });
  }
}
