import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService: StudentService){};

    @Get()
    getAll(){
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    getById(@Param('id') id:string){
        return this.studentService.getsStudentbyId(Number(id))
    }

    @Post()
    create(@Body() body: {name: string, age: number, grade: string}){
        return this.studentService.createStudent(body);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() body:{name: string, age: number, grade: string}){
        return this.studentService.updateStudent(Number(id), body);
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() body: Partial<{name: string, age: number, grade: string}>){
        return this.studentService.patchStudent(Number(id), body);
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return this.studentService.deleteStudent(Number(id));
    }
}
