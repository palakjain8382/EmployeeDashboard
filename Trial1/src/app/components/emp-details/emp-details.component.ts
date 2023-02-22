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
  Locations: any[] = [
    {id: 0, name: 'Cannon Tower'},
    {id: 1, name: 'Panchkula'},
    {id: 2, name: 'Bangalore'}
  ];
  selected: number = 1;
  empLoc: string = '';
  DOJ: any;
  empDesignation: string = '';
  empName: string = '';
  dateStr: string = '';

  constructor(private http : HttpClient, private router: Router,){} 
 
  ngOnInit(): void {
    this.http.get('https://localhost:7044/api/EmployeeAPI/GetEmployeeDetails')
    .subscribe(Response => {
      this.lis=Response;
      // console.log(this.lis);
        this.empID = this.lis[0].employeeID;
        this.empName = this.lis[0].name;
        this.empDesignation = this.lis[0].designation;
        this.empLoc = this.lis[0].location;
        this.dateStr = this.lis[0].joiningDate;
        this.DOJ = this.dateStr.split('T')[0];
        // console.log("time: " + this.dateStr.split('T')[1].split('.')[0]);
        // designation
        // email
        // employeeID
        // id
        // inTime
        // joiningDate
        // location
        // name
        // outTime
        // phone

    });
  }

  submitForm(form: NgForm) {
    this.empID = form.value.empID;
    this.lis[0].EmployeeID = this.empID;
    this.lis[0].name = this.empName;
    this.lis[0].designation = this.empDesignation;
    this.lis[0].location = this.empLoc;
    this.lis[0].joiningDate = this.DOJ;
    this.http.put('https://localhost:7044/api/EmployeeAPI/6', this.lis[0]).subscribe(
      (response) => {
      }
    );
  }
 
  selectOption(id: number) {
    this.empLoc = this.Locations[id].name;
  }
}