import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Gemini-Employee';
  login = false;

  constructor(private auth: AuthService){}

  ngOnInit(){
    this.auth.isLoggedIn.subscribe((isLoggedIn) => {
      if (isLoggedIn === true)
        this.login = true;
    });
  }
}
