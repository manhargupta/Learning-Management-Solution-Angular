import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CourseService} from "../../services/courses/course.service";
import {ICourse} from "../../models/models";
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  ngOnInit() {
  }
  @ViewChild('coursename') coursename:ElementRef
  addNewCourse(courseName){
    let course = {
      'name':courseName
    }
    this.courseService.addCourse(course)
      .subscribe((course:ICourse) => {
        swal("Success", "New Course Added Successfully");
        this.coursename.nativeElement.value=""
      });
  }

}
