import { Component, OnInit } from '@angular/core';
import {IBatch, ICourse, IStudent, ITeacher} from "../models/models";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../services/courses/course.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  batch:IBatch[]
  courseTotal:number;
  batchTotal:number;
  studentsTotal:number;
  teachersTotal:number
  constructor(private _route:ActivatedRoute, private courseService:CourseService) {
    this.batch=[]
  }
  ngOnInit() {
    this.courseService.getAllBatch()
      .subscribe((batch:IBatch[])=>{
        this.batchTotal=batch.length
        let d = new Date()
        batch=batch.filter((v:IBatch) => {
          let d2=new Date(v.batchdate)
            return d2>d
        })
        this.batch=batch;
      })

    this.courseService.getCourse().subscribe((course:ICourse[])=> {
      this.courseTotal = course.length;
    })

    this.courseService.getAllTeachers().subscribe((teacher:ITeacher[])=> {
      this.teachersTotal= teacher.length;
    })
    this.courseService.getAllStudents().subscribe((students:IStudent[])=> {
      this.studentsTotal= students.length;
    })




  }

}
