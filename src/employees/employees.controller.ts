import { Body, Controller, Post } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employees.entity';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeeService: EmployeesService){}

    @Post()
    async createEmployee(@Body() body: Partial<Employee>): Promise<Employee>{
        return this.employeeService.create(body)
    }
}
