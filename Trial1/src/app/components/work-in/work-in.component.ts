import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-work-in',
  templateUrl: './work-in.component.html',
  styleUrls: ['./work-in.component.css']
})
export class WorkInComponent{
  public inTime: any;
  public outTime: any;
  flag = true;
  toggle = true;
  status = "In Time";
  time = 0;
  timer: any;
  timeDisplay: string = '00:00:00';
  lis: any = [];
  
  constructor(private http : HttpClient, private router: Router,){} 
 
  ngOnInit(): void {
    this.http.get('https://localhost:7044/api/EmployeeAPI/GetEmployeeDetails')
    .subscribe(Response => {
      this.lis=Response;
    });
  }
  onBtnClick(){
    this.toggleBtnStyle();
    if(this.flag) this.InTime();
    this.OutTime();
    this.toggleTimer(); //start timer
  }

  toggleBtnStyle(){
    this.toggle = !this.toggle;
    this.status = this.toggle ? "In Time" : "Working Hours";
  }

  InTime(){
      this.inTime = Date();
      this.flag = false;
              // console.log("time: " + this.dateStr.split('T')[1].split('.')[0]);
      console.log("in time" + this.inTime + "    flag: " + this.flag);
    }
   OutTime(){
      this.outTime = Date();
      
      console.log("out time" + this.outTime + "    flag: " + this.flag);
    }


    toggleTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      } else {
        this.timer = setInterval(() => {
          this.time++;
          this.timeDisplay = this.getTimeDisplay(this.time);
        }, 1000);
      }
    }
    
    getTimeDisplay(time: number): string {
      const hours = Math.floor(time / 3600);
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
    }
    
    padNumber(num: number): string {
      return num.toString().padStart(2, '0');
    }
    
}
