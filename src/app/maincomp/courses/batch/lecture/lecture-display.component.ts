import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../../../services/courses/course.service";
import {IBatch, Ilecture} from "../../../../models/models";

@Component({
  selector: 'app-lecture-display',
  templateUrl: './lecture-display.component.html',
  styleUrls: ['./lecture-display.component.css']
})
export class LectureDisplayComponent implements OnInit {
  course:string
  batch:string
  cid:number;
  bid:number;
  lecture:Ilecture[]

  constructor(private _route:ActivatedRoute, private courseService:CourseService) {
    this.lecture=[]
    this._route.queryParams.subscribe((q)=>{
      this.course=q.course
      this.batch=q.batch

    })
  }

  ngOnInit() {
    this.cid= +this._route.snapshot.paramMap.get('cid')
    this.bid= +this._route.snapshot.paramMap.get('bid')
    this.courseService.getLecture(this.cid,this.bid)
      .subscribe((lecture:any)=>{
        this.lecture=lecture.lectures;
      })
  }

}
