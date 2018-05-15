import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IBatch, ICourse, Ilecture, IStudent, ISubject, ITeacher} from "../../models/models";

@Injectable()
export class CourseService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    })
  };
  private GET_POST_COURSE_URL='https://lmsmanhar.herokuapp.com/courses';
  private GET_SUBJECTS_URL='https://lmsmanhar.herokuapp.com/subjects'
  private GET_TEACHERS_URL='https://lmsmanhar.herokuapp.com/teachers'


  constructor(private http:HttpClient) { }

  getCourse(){
    return this.http.get<ICourse[]>(this.GET_POST_COURSE_URL)
  }

  addCourse(course){
    return this.http.post<ICourse>(this.GET_POST_COURSE_URL, course, this.httpOptions)
  }
  getBatch(courseid){
    let GET_POST_BATCH_URL='https://lmsmanhar.herokuapp.com/courses/'+courseid+'/batches'
    return this.http.get<IBatch[]>(GET_POST_BATCH_URL)
  }

  addBatch(batch,courseid){
    let GET_POST_BATCH_URL='https://lmsmanhar.herokuapp.com/courses/'+courseid+'/batches'
    return this.http.post<ICourse>(GET_POST_BATCH_URL, batch, this.httpOptions)
  }
  getLecture(courseid,batchid){
    let GET_LECTURE_URL='https://lmsmanhar.herokuapp.com/courses/'+courseid+'/batches/'+batchid+'/lectures'
    return this.http.get<Ilecture[]>(GET_LECTURE_URL)
  }

  addLecture(lecture,teacherId:number,cid:number,bid:number){
    let POST_LECTURE_URL='https://lmsmanhar.herokuapp.com/courses/'+cid+'/batches/'+bid+'/lectures/'+teacherId
    return this.http.post<ICourse>(POST_LECTURE_URL, lecture, this.httpOptions)
  }

  getTeachers(){
    return this.http.get<ITeacher[]>(this.GET_TEACHERS_URL)
  }
  getSubjects(){
    return this.http.get<ISubject[]>(this.GET_SUBJECTS_URL)
  }

  getStudents(cid:number,bid:number){
    let GET_STUDENT_URL='https://lmsmanhar.herokuapp.com/courses/'+cid+'/batches/'+bid+'/students'
    return this.http.get<IStudent[]>(GET_STUDENT_URL)
  }

  getAllStudents(){
    let GET_STUDENT_URL='https://lmsmanhar.herokuapp.com/students'
    return this.http.get<IStudent[]>(GET_STUDENT_URL)
  }



  addStudentToBatch(studentId:number,cid:number,bid:number){
    let POST_BATCH_URL='https://lmsmanhar.herokuapp.com/students/'+studentId+'/courses/'+cid+'/batches/'+bid
    return this.http.post<IStudent>(POST_BATCH_URL,'', this.httpOptions)
  }

  getStudentBatch(sid:number){
    let GET_STUDENTBATCH_URL='https://lmsmanhar.herokuapp.com/students/'+sid+"/batches"
    return this.http.get<IStudent[]>(GET_STUDENTBATCH_URL)
  }
  addStudent(student){
    let POST_STUDENT_URL='https://lmsmanhar.herokuapp.com/students/'
    return this.http.post<ICourse>(POST_STUDENT_URL, student, this.httpOptions)
  }

  getAllBatch(){
    let GET_BATCHES_URL='https://lmsmanhar.herokuapp.com/batches'
    return this.http.get<IBatch[]>(GET_BATCHES_URL)
  }

  getAllSubjects(){
    let GET_SUBJECTS_URL='https://lmsmanhar.herokuapp.com/subjects'
    return this.http.get<ISubject[]>(GET_SUBJECTS_URL)
  }

  getAllTeachers(){
    let GET_TEACHERS_URL='https://lmsmanhar.herokuapp.com/teachers'
    return this.http.get<ITeacher[]>(GET_TEACHERS_URL)
  }

  addSubject(subject,cid){
    let POST_SUBJECT_URL='https://lmsmanhar.herokuapp.com/subjects/courses/'+cid
    return this.http.post<ICourse>(POST_SUBJECT_URL, subject, this.httpOptions)
  }
  addTeacher(teacher,sid){
    let POST_TEACHER_URL='https://lmsmanhar.herokuapp.com/teachers/'+sid
    return this.http.post<ICourse>(POST_TEACHER_URL, teacher, this.httpOptions)
  }

}
