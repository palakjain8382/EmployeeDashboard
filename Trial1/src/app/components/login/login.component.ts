import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
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
    private socialAuthService: SocialAuthService, private router: Router, private fb: FormBuilder,
    private auth: AuthService,
  ) {    this.form = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
}
  
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      // this.auth.isLoggedIn = (user != null);
      console.log(this.auth.isLoggedIn);
    });
  }

  login(): void {
    console.log("login called")
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    if(this.auth.isLoggedIn)
     this.router.navigate(['home']);
    else
      this.router.navigate(['/']);
  }

  // loginWithGoogle(): void {
  //   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
  //     .then(() => this.router.navigate(['home']));
  // }

  isFieldInvalid(userName: string) {
    const formControl = this.form.get(userName);
    return formControl?.invalid && (formControl.dirty || formControl.touched);
  }

  loginUP(){
    if (this.form.valid) {
      this.auth.login(this.form.value);
    }
  }


}
