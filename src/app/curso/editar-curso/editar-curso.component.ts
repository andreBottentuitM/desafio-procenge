import { Component, ViewChild } from '@angular/core';
import { Course } from 'src/app/shared/models/curso.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { courseService } from '../services/curso.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css'],
})
export class EditCourseComponent {
  @ViewChild('formCurso') formCurso!: NgForm;
  course!: Course;
  hoursInput = '';
  showCorrect = false;
  showIncorrect = false;

  constructor(
    private courseService: courseService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.courseService.findForId(id);
    if (res !== undefined) {
      this.course = res;
    } else {
      throw new Error(`Pessoa não encontrada: id = ${id}`);
    }
  }

  getValue(event: Event): string {
    return ((event.target as HTMLInputElement).value = (
      event.target as HTMLInputElement
    ).value.replace(/\D/g, ''));
  }

  edit(): void {
    if (
      this.course.name &&
      this.course.instructor &&
      this.course.local &&
      this.course.hours &&
      this.course.date
    ) {
      this.showCorrect = true;
      setTimeout(() => {
        this.showCorrect = false;
      }, 2000);

      this.courseService.editCourse(this.course);
    } else {
      this.showIncorrect = true;
      setTimeout(() => {
        this.showIncorrect = false;
      }, 2000);
    }
  }
}
