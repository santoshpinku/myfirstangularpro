import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'pro2';
  loginForm = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    Emailaddress: new FormControl(''),
    Password: new FormControl(''),
    cars: new FormControl('')
  });
  getFormData(data: any) {
    console.log(data);
  }
  santos() {
    this.router.navigate(['/home'])
  }
}
