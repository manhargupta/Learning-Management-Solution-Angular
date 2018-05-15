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
  constructor(private _route:ActivatedRoute, private studentService:CourseService) {
    this.students=[]
  }

  ngOnInit() {
    this.studentService.getAllStudents()
      .subscribe((students:any)=>{
        this.students=students;
      })
  }

}
