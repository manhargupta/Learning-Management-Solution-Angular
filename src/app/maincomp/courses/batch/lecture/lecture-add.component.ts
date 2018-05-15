import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../../../services/courses/course.service";
import {IBatch, ISubject, ITeacher} from "../../../../models/models";
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-lecture-add',
  templateUrl: './lecture-add.component.html',
  styleUrls: ['./lecture-add.component.css']
})
export class LectureAddComponent implements OnInit {
  course:string
  batch:string
  cid:number;
  bid:number;
  teachers:ITeacher[]
  subjects:ISubject[]
  constructor(private _route:ActivatedRoute, private courseService:CourseService) {
    this.teachers=[]
    this.subjects=[]
    this._route.queryParams.subscribe((q)=>{
      this.course=q.course
      this.batch=q.batch

    })
  }

  ngOnInit() {
    this.cid= +this._route.snapshot.paramMap.get('cid')
    this.bid= +this._route.snapshot.paramMap.get('bid')
    this.courseService.getSubjects()
      .subscribe((subjects:ISubject[])=>{
        this.subjects=subjects;
      })
    this.courseService.getTeachers()
      .subscribe((teachers:ITeacher[])=>{
        this.teachers=teachers;
      })
  }
  @ViewChild('lecture') lecture:ElementRef
  addLecture(lectureName:string, teacherId:number){
    let lecture={
      'name':lectureName
    }
    this.courseService.addLecture(lecture,teacherId,this.cid,this.bid)
      .subscribe((batch:IBatch) => {
        swal("Success", "New Lecture Added Successfully in Batch: "+this.batch);
        this.lecture.nativeElement.value=""
      });
  }

}
