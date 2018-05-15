import { Component, OnInit } from '@angular/core';
import {Ilecture, IStudent} from "../../../../models/models";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../../../services/courses/course.service";

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css']
})
export class StudentDisplayComponent implements OnInit {
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
    this.courseService.getStudents(this.cid,this.bid)
      .subscribe((students:any)=>{
        this.students=students[0].students;
      })
  }

}
