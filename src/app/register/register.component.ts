import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router: Router) {}
  title = 'pro2';
  SignupForm = new FormGroup({
    name: new FormControl('', [ Validators.required ]),
    number: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required ]),
    pwd: new FormControl('', [ Validators.required ]),
    pswrepeat: new FormControl('', [ Validators.required ])
  });

  get FName() {
    return this.SignupForm.get('name');
  }
  get Num() {
    return this.SignupForm.get('number');
  }
  get Email() {
    return this.SignupForm.get('email');
  }
  get Password() {
    return this.SignupForm.get('pwd');
  }
  get Pswrepeat() {
    return this.SignupForm.get('pswrepeat');
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
