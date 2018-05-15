import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ICourse} from "../../models/models";
import {CourseService} from "../../services/courses/course.service";
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent implements OnInit {

  constructor(private studentService:CourseService) { }
  ngOnInit() {
  }
  @ViewChild('studentname') studentname:ElementRef
  addNewStudent(studentName){
    let student = {
      'name':studentName
    }
    this.studentService.addStudent(student)
      .subscribe((student:ICourse) => {
        swal("Success", "New Student Added Successfully");
        this.studentname.nativeElement.value=""
      });
  }

}
