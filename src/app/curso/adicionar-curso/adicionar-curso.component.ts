import { Component, ViewChild ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Course } from 'src/app/shared/models/curso.model';
import { courseService } from '../services/curso.service';

@Component({
  selector: 'app-adicionar-curso',
  templateUrl: './adicionar-curso.component.html',
  styleUrls: ['./adicionar-curso.component.css']
})

export class AddCourseComponent implements OnInit{
 @ViewChild ('formCourse') formCourse! : NgForm
  course! : Course
  showCorrect = false
  showIncorrect = false
  hoursInput = ''

  constructor(
    private courseService : courseService
   ) {}

   getValue(event: Event): string {
    return (event.target as HTMLInputElement).value = (event.target as HTMLInputElement).value.replace(/\D/g, '')
  }

   ngOnInit(): void {
     this.course = new Course()
   }

   addCourse(): void {
     
     if(this.course.name && this.course.instructor && this.course.local && this.course.hours && this.course.date){
       this.courseService.addCourse(this.course)
       this.showCorrect = true;

       setTimeout(()=>{
        this.showCorrect = false
        
      },2000)
     }else{
        this.showIncorrect = true
        setTimeout(()=>{
          this.showIncorrect = false
        },2000)
     }
    }

}
