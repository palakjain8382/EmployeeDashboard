import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user: any;
  admin:boolean=false

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isAdmin() {
    return this.admin;
  }

  constructor(
    private router: Router,
  ) {}

login(user: User) {
  if (user.userName == 'admin' && user.password == 'admin' ) {
    this.admin=true;
    this.trueLogin();
  }
  if (user.userName == 'user' && user.password == 'user' ) {
    this.trueLogin();
    }
}

trueLogin(){
  this.loggedIn.next(true);
  this.router.navigate(['home']);
}

  logout(){
    localStorage.removeItem;
    this.loggedIn.next(false);
    this.router.navigate(['/']);
  }

}