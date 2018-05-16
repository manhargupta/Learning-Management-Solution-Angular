import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopPanelComponent } from './panels/top-panel.component';
import { LeftPanelComponent } from './panels/left-panel.component';
import { CourseDisplayComponent } from './maincomp/courses/course-display.component';
import { DashboardComponent } from './maincomp/dashboard.component';
import { CourseAddComponent } from './maincomp/Courses/course-add.component';
import { BatchDisplayComponent } from './maincomp/Courses/batch/batch-display.component';
import { BatchAddComponent } from './maincomp/Courses/Batch/batch-add.component';
import { LectureDisplayComponent } from './maincomp/Courses/Batch/lecture/lecture-display.component';
import { LectureAddComponent } from './maincomp/Courses/Batch/Lecture/lecture-add.component';
import {RouterModule} from "@angular/router";
import { StudentDisplayComponent } from './maincomp/Courses/Batch/student/student-display.component';
import { StudentAddComponent } from './maincomp/Courses/Batch/Student/student-add.component';
import { StudentsDisplayComponent } from './maincomp/student/students-display.component';
import { StudentsAddComponent } from './maincomp/Student/students-add.component';
import { StudentsSearchComponent } from './maincomp/Student/search/students-search.component';
import { StudentAddBatchComponent } from './maincomp/Student/search/student-add-batch.component';
import { SubjectDisplayComponent } from './maincomp/subject/subject-display.component';
import { SubjectAddComponent } from './maincomp/Subject/subject-add.component';
import { TeacherDisplayComponent } from './maincomp/teacher/teacher-display.component';
import { TeacherAddComponent } from './maincomp/Teacher/teacher-add.component';
import {CourseService} from "./services/courses/course.service";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    TopPanelComponent,
    LeftPanelComponent,
    CourseDisplayComponent,
    DashboardComponent,
    CourseAddComponent,
    BatchDisplayComponent,
    BatchAddComponent,
    LectureDisplayComponent,
    LectureAddComponent,
    StudentDisplayComponent,
    StudentAddComponent,
    StudentsDisplayComponent,
    StudentsAddComponent,
    StudentsSearchComponent,
    StudentAddBatchComponent,
    SubjectDisplayComponent,
    SubjectAddComponent,
    TeacherDisplayComponent,
    TeacherAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:"",component:DashboardComponent},
      {path:"courses",component:CourseDisplayComponent},
      {path:"courses/coursesadd",component:CourseAddComponent},

      {path:"courses/batch/:id",component:BatchDisplayComponent},
      {path:"courses/batch/batchadd/:id",component:BatchAddComponent},
      {path:"courses/batch/lecture/:cid/:bid",component:LectureDisplayComponent},
      {path:"courses/batch/lecture/lectureadd/:cid/:bid",component:LectureAddComponent},
      {path:"courses/batch/student/:cid/:bid",component:StudentDisplayComponent},
      {path:"courses/batch/student/studentadd/:cid/:bid",component:StudentAddComponent},

      {path:"student",component:StudentsDisplayComponent},
      {path:"student/studentadd",component:StudentsAddComponent},
      {path:"student/studentadd/batches/:id",component:StudentsSearchComponent},
      {path:"student/studentadd/addbatch/:id",component:StudentAddBatchComponent},

      {path:"subject",component:SubjectDisplayComponent},
      {path:"subject/subjectadd",component:SubjectAddComponent},

      {path:"teacher",component:TeacherDisplayComponent},
      {path:"teacher/teacheradd",component:TeacherAddComponent},


      {path:"**",redirectTo:"",pathMatch:"full"},

    ])
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
