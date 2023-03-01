import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Output } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent{
  progress: number = 0;
  message: string = '';
  Locations: any[] = [
    'Cannan Tower',
    'Panchkula',
    'Bangalore'
  ];
  temp: any;

  addEmployeeRequest: Employee = {
    employeeID: '',
    name: '',
    designation: '',
    phone: 0,
    email: '',
    joiningDate: new Date(),
    location: '',
    username: '',
    password: '',
    // profile: new File([], '', ),
  }

 ngOnInit(): void{

 }
  

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http : HttpClient, private router: Router, private employeeService: EmployeeService){  } 


  submitForm() {
    this.employeeService.addEmployee( this.addEmployeeRequest)
    .subscribe({
      next: (employee) => {
        this.router.navigate(['empDirectory'])
      }
    })
  }

  uploadFile = (files: any) => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    
    this.http.post('https://localhost:7044/api/EmployeeAPI/Img', formData, {reportProgress: true, observe: 'events'})
      .subscribe({
        next: (event) => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * (event.loaded / (event.total ?? 1)));
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      },
      error: (err: HttpErrorResponse) => console.log(err)
    });
  }
}
