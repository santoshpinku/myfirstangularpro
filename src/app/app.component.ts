import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
  title = 'pro2';
  loginForm = new FormGroup({
    name: new FormControl('', [ Validators.required ]),
    number: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required ]),
    pwd: new FormControl('', [ Validators.required ]),
    pswrepeat: new FormControl('', [ Validators.required ])
  });

  get FName() {
    return this.loginForm.get('name');
  }
  get Num() {
    return this.loginForm.get('number');
  }
  get Email() {
    return this.loginForm.get('email');
  }
  get Password() {
    return this.loginForm.get('pwd');
  }
  get Pswrepeat() {
    return this.loginForm.get('pswrepeat');
  }
  formSub(fdata : any) {
    console.log(fdata);
    
  }
  getFormData(data: any) {
    console.log(data);
  }
  santos() {
    this.router.navigate(['/home'])
  }
}
