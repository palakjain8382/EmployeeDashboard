import { Component,OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit{
  public employees:Employee[] = [];
  name = '';

  constructor(private employeeService: EmployeeService, ){ }

  ngOnInit(): void{
      this.allEmp();
  }

  Search(){
    if(this.name){
      this.employees = this.employees.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase()) || res.employeeID.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
    else{
      this.allEmp();
    }
  }

  allEmp(){
    this.employeeService.getAllEmployees()
      .subscribe({
        next: (employees) => {
          this.employees = employees;
        },
        error: (response) =>{
          console.log(response);
        }
      })
  }

}
