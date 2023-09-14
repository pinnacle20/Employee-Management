import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {
    id: number
    employee: Employee = new Employee();

    constructor(private employeeService: EmployeeService,
                private activatedRoute: ActivatedRoute){}
    
    ngOnInit(){
      this.id = this.activatedRoute.snapshot.params['id'];
      console.log('id is ', this.id);
      this.employeeService.getEmployeeById(this.id).subscribe(data=>{
        this.employee = data;
      })
    }
}
