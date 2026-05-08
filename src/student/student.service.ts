import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {

    private students = [
        {
            id : 1,
            name : "John Doe",
            age : 20,
            grade : "A"
        },
        {
            id : 2,
            name : "Jane Smith",
            age : 22,
            grade : "B"
        }
    ]

    getAllStudents(){
        return this.students;
    }

    getsStudentbyId(id:number){
        const student = this.students.find((s) => s.id === id);
        if(!student){
            throw new NotAcceptableException("Student not found");
        }
        return student;
    }

    //POST
    createStudent(data: {name:string, age:number, grade:string}){
        const newStudent = {
            id: this.students.length +1, ...data,
        }
        this.students.push(newStudent);
        return newStudent;
    }

    //PUT
    updateStudent(id: number, data:{name: string, age: number, grade: string}){
        const index = this.students.findIndex((s) =>s.id === id); // the findIndex method return id - 1. when is not equall then the return -1
        if(index === -1){
            throw new NotFoundException("student Not found");
        }
        this.students[index] = {id, ...data};
        return this.students[index];
    }

    //PATHCH
    patchStudent(id: number, data: Partial<{name: string, age: number, grade: string}>){
        const student = this.getsStudentbyId(id);
        Object.assign(student, data);
        return student;
    }

    //DELETE
    deleteStudent(id: number){
        const index = this.students.findIndex((s) => s.id === id);
        if (index === -1) throw new NotFoundException("Student not Found");
        const deleted = this.students.splice(index,1);
        return { message: "Student deleted Successfully", student: deleted[0] };
    }
}
