import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent{
  public lis: any =[];
  empID: string = '';
  empDesignation: string = 'Software Developer';
  empName: string = 'John Doe';

  constructor(private http : HttpClient, private router: Router,){} 
 
  ngOnInit(): void {
    this.http.get('https://localhost:7044/api/EmployeeAPI/GetEmployeeDetails')
    .subscribe(Response => {
      this.lis=Response;
        this.empID = this.lis[0].employeeID;
    });
  }

  submitForm(form: NgForm) {
    this.empID = form.value.empID;
    this.lis[0].EmployeeID = this.empID;
    this.http.put('https://localhost:7044/api/EmployeeAPI/1', this.lis[0]).subscribe(
      (response) => {
      }
    );
  }
 
}