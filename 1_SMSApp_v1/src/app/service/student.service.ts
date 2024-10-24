import { Injectable } from '@angular/core';
import { Student } from '../../model/Student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// export class StudentService {
//   students:Student[] = [];
//   constructor() { 
//       let s1 = new Student(1,"Amit",2,80,["Java","Python"]);
//       let s2 = new Student(2,"Sumit",5,63,["C#","Python"]);
//       let s3 = new Student(3,"Virat",1,99,["Block Chain","C++"]);
//       let s4 = new Student(4,"Rahul",2,95,["Java","Python"]);
//       let s5 = new Student(5,"Hardik",4,89,["Java","Python","IoT"]);

//       this.students.push(s1);
//       this.students.push(s2);
//       this.students.push(s3);
//       this.students.push(s4);
//       this.students.push(s5);
//   }
//   findAllStudents(){
//     return this.students;
//   }

//   addStudent(student: Student) {
//     this.students.push(student);
//   }
// }
export class StudentService {
  private apiUrl = 'http://localhost:8080/api/student'; // Adjust the URL as needed

  constructor(private http: HttpClient) {}

  // Use HTTP POST to save a student
  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }
  
  // findAllStudents(){
  //   return this.students;
  // }
  // Other methods...
}