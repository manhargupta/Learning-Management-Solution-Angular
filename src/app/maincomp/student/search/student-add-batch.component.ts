import { Component, OnInit } from '@angular/core';
import {IBatch, ICourse, IStudent} from "../../../models/models";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../../services/courses/course.service";
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-student-add-batch',
  templateUrl: './student-add-batch.component.html',
  styleUrls: ['./student-add-batch.component.css']
})
export class StudentAddBatchComponent implements OnInit {
  studentname:string
  batches:IBatch[]
  courses:ICourse[]
  id:number
  constructor(private _route:ActivatedRoute, private studentService:CourseService) {
    this.batches=[]
    this._route.queryParams.subscribe(q=>this.studentname=q.studentname)
  }
  ngOnInit() {
    this.id= +this._route.snapshot.paramMap.get('id')

    this.studentService.getCourse()
      .subscribe((course:ICourse[])=>{
        console.log(course)
        this.courses=course;
      })
  }
  addBatch(bid:number,cid:number){
    this.studentService.addStudentToBatch(this.id,cid,bid)
      .subscribe((student:IStudent) => {
        swal("Success", "Student Added Successfully in Batch");
      });

  }

  getBatch(cid:number){
    if(cid==-1){
      swal("Error", "Please Select a course");
      this.batches=[]
      return;
    }
    this.studentService.getBatch(cid)
      .subscribe((batches:any)=>{
        this.batches=batches;
      })
  }

}
