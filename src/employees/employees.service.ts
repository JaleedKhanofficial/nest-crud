import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employees.entity';
import { Repository } from 'typeorm';


@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employee)
        private employeeRepository : Repository<Employee>
    ){}

    async create(employeeData: Partial<Employee>):Promise<Employee>{
        const employee = this.employeeRepository.create(employeeData);
        return this.employeeRepository.save(employee);
    }

}
