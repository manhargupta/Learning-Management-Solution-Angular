import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IBatch, ICourse} from "../../../models/models";
import {CourseService} from "../../../services/courses/course.service";

@Component({
  selector: 'app-batch-display',
  templateUrl: './batch-display.component.html',
  styleUrls: ['./batch-display.component.css']
})
export class BatchDisplayComponent implements OnInit {
  coursename:string
  id:number;
  batch:IBatch[]

  constructor(private _route:ActivatedRoute, private courseService:CourseService) {
    this.batch=[]
    this._route.queryParams.subscribe(q=>this.coursename=q.coursename)
  }
  ngOnInit() {
    this.id= +this._route.snapshot.paramMap.get('id')
    this.courseService.getBatch(this.id)
      .subscribe((batch:IBatch[])=>{
        this.batch=batch;
      })
  }

}
