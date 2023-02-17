import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  user: any;
  isLoggedin?: boolean;

  constructor(
    private socialAuthService: SocialAuthService, private router: Router,
  ) {}
  
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isLoggedin = (user != null);
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    if(this.isLoggedin === true)
     this.router.navigate(['home']);
    else
      this.router.navigate(['login']);

  }
}
