import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {}
  onSignup(form: NgForm) {
    console.log(form.value);
    if (form.invalid) {
      return;
    }
    let formData: any = {
      Email: form.value.Email,
      Password: form.value.Password,
    };
    form.resetForm();
    this.service.login(formData).subscribe((response: any) => {
      localStorage.setItem('userId', response.userId);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/']);
      alert('loggedIn succesfully');
    });
  }
}
