import { Component, OnInit } from '@angular/core';
import {IBatch} from "../../../models/models";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../../services/courses/course.service";

@Component({
  selector: 'app-students-search',
  templateUrl: './students-search.component.html',
  styleUrls: ['./students-search.component.css']
})
export class StudentsSearchComponent implements OnInit {
  studentname:string
  studentsBatch:IBatch[]
  id:number
  constructor(private _route:ActivatedRoute, private studentService:CourseService) {
    this.studentsBatch=[]
    this._route.queryParams.subscribe(q=>this.studentname=q.studentname)
  }
  ngOnInit() {
    this.id= +this._route.snapshot.paramMap.get('id')
    this.studentService.getStudentBatch(this.id)
      .subscribe((batches:any)=>{
        this.studentsBatch=batches[0].batches;
      })
  }


}
