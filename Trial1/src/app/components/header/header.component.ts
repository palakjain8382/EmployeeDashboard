import { Component } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  logo: string;
  bellIcon: string;
  logoutIcon: string;

  constructor(    private socialAuthService: SocialAuthService, private router: Router, private auth: AuthService
    ) {    
    //image location
    this.logo = '/assets/Images/logo.png',
    this.bellIcon = '/assets/Images/bellIcon.png',
    this.logoutIcon = '/assets/Images/logoutIcon.png'
  }

  public logout(){
    this.socialAuthService.signOut();
    this.auth.logout();
    this.router.navigate(['/']);
  }

}

