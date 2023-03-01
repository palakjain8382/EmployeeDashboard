import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient, ) { }

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/EmployeeAPI/GetEmployeeDetails');
  }

  addEmployee(addEmployeeRequest: any): Observable<Employee[]>{
    return this.http.post<any>(this.baseApiUrl + '/api/EmployeeAPI/NewData', addEmployeeRequest);
  }

  // editEmployee(editEmp)
}
