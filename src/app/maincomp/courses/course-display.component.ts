import { Component, OnInit } from '@angular/core';
import {ICourse} from "../../models/models";
import {CourseService} from "../../services/courses/course.service";

@Component({
  selector: 'app-course-display',
  templateUrl: './course-display.component.html',
  styleUrls: ['./course-display.component.css']
})
export class CourseDisplayComponent implements OnInit {

  courses:ICourse[]
  constructor(private courseService:CourseService) {
    this.courses=[]
  }

  ngOnInit() {
    this.courseService.getCourse()
      .subscribe((courses:ICourse[])=>{
        this.courses=courses;
      }
  )

  }

}
