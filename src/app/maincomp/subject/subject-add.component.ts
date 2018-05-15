import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ICourse, ISubject} from "../../models/models";
import {CourseService} from "../../services/courses/course.service";

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {

  courses:ICourse[]
  constructor(private studentService:CourseService) {
    this.courses=[]
  }
  ngOnInit() {
    this.studentService.getCourse()
      .subscribe((courses:any)=>{
        this.courses=courses;
      })
  }
  @ViewChild('subjectname') subjectname:ElementRef
  addNewSubject(subjectName,cid){
    let subject = {
      'name':subjectName
    }
    this.studentService.addSubject(subject,cid)
      .subscribe((subject:ISubject) => {
        swal("Success", "New Subject Added Successfully");
        this.subjectname.nativeElement.value=""
      });
  }

}
