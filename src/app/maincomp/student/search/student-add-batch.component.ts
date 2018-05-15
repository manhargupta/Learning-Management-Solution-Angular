import { Component, OnInit } from '@angular/core';
import {IBatch, IStudent} from "../../../models/models";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../../services/courses/course.service";

@Component({
  selector: 'app-student-add-batch',
  templateUrl: './student-add-batch.component.html',
  styleUrls: ['./student-add-batch.component.css']
})
export class StudentAddBatchComponent implements OnInit {
  studentname:string
  batches:IBatch[]
  id:number
  constructor(private _route:ActivatedRoute, private studentService:CourseService) {
    this.batches=[]
    this._route.queryParams.subscribe(q=>this.studentname=q.studentname)
  }
  ngOnInit() {
    this.id= +this._route.snapshot.paramMap.get('id')
    this.studentService.getAllBatch()
      .subscribe((batches:any)=>{
        this.batches=batches;
      })
  }
  addBatch(bid:number,cid:number){
    this.studentService.addStudentToBatch(this.id,cid,bid)
      .subscribe((student:IStudent) => {
        swal("Success", "Student Added Successfully in Batch");
      });

  }

}
