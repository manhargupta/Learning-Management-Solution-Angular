import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IBatch, ICourse} from "../../../models/models";
import {CourseService} from "../../../services/courses/course.service";
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-batch-add',
  templateUrl: './batch-add.component.html',
  styleUrls: ['./batch-add.component.css']
})
export class BatchAddComponent implements OnInit {
  coursename:string
  constructor(private route: ActivatedRoute,private courseService:CourseService) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(q=>this.coursename=q.coursename)
  }
  @ViewChild('batchname') batchname:ElementRef
  addNewBatch(batchname){
    let batch = {
      'name':batchname
    }
    this.courseService.addBatch(batch,+this.route.snapshot.paramMap.get('id'))
      .subscribe((batch:IBatch) => {
        swal("Success", "New Batch Added Successfully in course: "+this.coursename);
        this.batchname.nativeElement.value=""
      });
  }

}
