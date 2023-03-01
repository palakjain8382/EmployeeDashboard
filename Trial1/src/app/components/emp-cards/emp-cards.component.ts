import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-emp-cards',
  templateUrl: './emp-cards.component.html',
  styleUrls: ['./emp-cards.component.css']
})

export class EmpCardsComponent implements OnInit {
  public lis: any =[];
  empID: string = '';

  constructor(private http : HttpClient){} 
 
  ngOnInit(): void {
    this.http.get('https://localhost:7044/api/EmployeeAPI/GetEmployeeDetails')
    .subscribe(Response => {
      this.lis=Response;
      // this.empID = this.findEmployeeDetails(this.lis, 'Nick Wess');
    });
  }

  // public findEmployeeDetails(employeeList: Array<{name: string, salary: string}>, position: string){
  //   for (let e of employeeList) {
  //     if (e.name === position)
  //           return e.salary;
  //   };
  //   return "Employee not found.";
  // }
}