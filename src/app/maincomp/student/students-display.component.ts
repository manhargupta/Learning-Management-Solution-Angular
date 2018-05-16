import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/courses/course.service";
import {IStudent} from "../../models/models";

@Component({
  selector: 'app-students-display',
  templateUrl: './students-display.component.html',
  styleUrls: ['./students-display.component.css']
})
export class StudentsDisplayComponent implements OnInit {

  students:IStudent[]
  studentsBackup:IStudent[]
  constructor(private _route:ActivatedRoute, private studentService:CourseService) {
    this.students=[]
    this.studentsBackup=[]
  }

  ngOnInit() {
    this.getStudentsAPI()
  }
  filterStudents(val: string) {
    if(val==''){
      this.students=this.studentsBackup
    }else {
      let filterStu: IStudent[] = this.students
      filterStu = filterStu.filter((value:any) => {
        return value.id == val;
      })
      this.students = filterStu;
    }
  }

  getStudentsAPI(){
    this.studentService.getAllStudents()
      .subscribe((students:any)=>{
        this.students=students;
        this.studentsBackup=students;
      })
  }

}
