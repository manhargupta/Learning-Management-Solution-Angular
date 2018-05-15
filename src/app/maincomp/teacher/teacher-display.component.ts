import { Component, OnInit } from '@angular/core';
import {IStudent, ITeacher} from "../../models/models";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/courses/course.service";

@Component({
  selector: 'app-teacher-display',
  templateUrl: './teacher-display.component.html',
  styleUrls: ['./teacher-display.component.css']
})
export class TeacherDisplayComponent implements OnInit {

  teachers:ITeacher[]
  constructor(private _route:ActivatedRoute, private teachersService:CourseService) {
    this.teachers=[]
  }

  ngOnInit() {
    this.teachersService.getAllTeachers()
      .subscribe((teachers:any)=>{
        this.teachers=teachers;
      })
  }

}
