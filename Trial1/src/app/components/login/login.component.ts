import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user: any;
  form: FormGroup;

a:boolean=true;
  constructor(
   private router: Router, private fb: FormBuilder,
    private auth: AuthService,
  ) {    this.form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
}
  
  ngOnInit() {

  }

  login(): void {
    console.log("login called")
    if(this.auth.isLoggedIn)
     this.router.navigate(['home']);
    else
      this.router.navigate(['/']);
  }


  isFieldInvalid(userName: string) {
    const formControl = this.form.get(userName);
    return formControl?.invalid && (formControl.dirty || formControl.touched);
  }

  loginSubmit(){
    if (this.form.valid) {
      this.auth.login(this.form.value);
    }
  }


}
