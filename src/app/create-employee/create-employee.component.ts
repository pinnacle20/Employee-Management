import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router: Router) {
  }

  onSubmit() {
    console.log('Submit Clicked');
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      // console.log(data);
      this.goToListEmployee();
    })
  }

  goToListEmployee() {
    this.router.navigate(['/employees']);
  }
}
