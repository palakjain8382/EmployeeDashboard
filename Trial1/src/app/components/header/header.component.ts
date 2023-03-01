import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  logo: string;
  bellIcon: string;
  logoutIcon: string;
  condition: boolean = false;
  
  constructor( private router: Router, private auth: AuthService, private app: AppComponent
    ) {    
    //image location
    this.logo = '/assets/Images/logo.png',
    this.bellIcon = '/assets/Images/bellIcon.png',
    this.logoutIcon = '/assets/Images/logoutIcon.png'
  }

  ngOnInit(): void {
      if(this.auth.isAdmin)
        this.condition = true;
  }
  
  public logout(){
    this.auth.logout();
    this.app.login = false;
  }

}

