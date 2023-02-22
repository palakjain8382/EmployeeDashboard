import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user: any;

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router,
  ) {}

login(user: User) {
  if (user.userName == 'admin' && user.password == 'admin' ) {
    this.trueLogin();
    this.router.navigate(['home']);
  }
}

trueLogin(){
  this.loggedIn.next(true);
}

  logout(){
    localStorage.clear;
    this.loggedIn.next(false);
  }

  getStatus(){
    this.isLoggedIn.subscribe((isLoggedIn) => {
      console.log("isLoggedIn " + isLoggedIn);
      if (isLoggedIn === true){
       return true;
      }
      return false;
    });
  }
}