import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ICourse, ISubject, ITeacher} from "../../models/models";
import {CourseService} from "../../services/courses/course.service";
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent implements OnInit {

  subjects:ICourse[]
  constructor(private studentService:CourseService) {
    this.subjects=[]
  }
  ngOnInit() {
    this.studentService.getAllSubjects()
      .subscribe((subjects:any)=>{
        this.subjects=subjects;
      })
  }
  @ViewChild('teachername') teachername:ElementRef
  addNewTeacher(teacherName,sid){
    let teacher = {
      'name':teacherName
    }
    this.studentService.addTeacher(teacher,sid)
      .subscribe((teacher:ITeacher) => {
        swal("Success", "New Teacher Added Successfully");
        this.teachername.nativeElement.value=""
      });
  }

}
