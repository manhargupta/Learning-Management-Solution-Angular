import { Component, OnInit } from '@angular/core';
import {IBatch, IStudent} from "../../../../models/models";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../../../services/courses/course.service";

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {
  course:string
  batch:string
  cid:number;
  bid:number;
  students:IStudent[]
  constructor(private _route:ActivatedRoute, private courseService:CourseService) {
    this.students=[]
    this._route.queryParams.subscribe((q)=>{
      this.course=q.course
      this.batch=q.batch

    })
  }

  ngOnInit() {
    this.cid= +this._route.snapshot.paramMap.get('cid')
    this.bid= +this._route.snapshot.paramMap.get('bid')
    this.courseService.getAllStudents()
      .subscribe((students:any)=>{
        this.students=students;
      })
  }

  addBatch(studentId:number){
    this.courseService.addStudentToBatch(studentId,this.cid,this.bid)
      .subscribe((student:IStudent) => {
        swal("Success", "Student Added Successfully in Batch: "+this.batch);
      });
  }

}
