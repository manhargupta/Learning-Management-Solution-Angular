import { Component, OnInit } from '@angular/core';
import {IStudent, ISubject} from "../../models/models";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/courses/course.service";

@Component({
  selector: 'app-subject-display',
  templateUrl: './subject-display.component.html',
  styleUrls: ['./subject-display.component.css']
})
export class SubjectDisplayComponent implements OnInit {

  subjects:ISubject[]
  constructor(private _route:ActivatedRoute, private subjectService:CourseService) {
    this.subjects=[]
  }

  ngOnInit() {
    this.subjectService.getAllSubjects()
      .subscribe((subjects:any)=>{
        this.subjects=subjects;
      })
  }

}
