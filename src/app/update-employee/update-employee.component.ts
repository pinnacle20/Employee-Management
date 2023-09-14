import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {
  id: number
  employee: Employee = new Employee();

  constructor(private employeeService : EmployeeService,
              private activateRoute: ActivatedRoute,
              private route: Router){}

  ngOnInit(){
    this.id = this.activateRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    })

  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data =>{
      console.log(data);
      this.route.navigate(['/employees']);
    })
  }


}
