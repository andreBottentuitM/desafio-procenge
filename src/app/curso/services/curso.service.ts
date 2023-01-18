import { Injectable } from '@angular/core';
import { Course } from 'src/app/shared/models/curso.model';

const LOCAL: string = 'courses';

@Injectable({
  providedIn: 'root',
})
export class courseService {
  constructor() {}

  allCourses(): Course[] {
    const courses = localStorage[LOCAL]; // vai criar uma variavel local

    return courses
      ? JSON.parse(courses)
      : [
          {
            id: 1,
            name: 'Angular',
            instructor: 'Genival',
            local: 'Softex',
            hours: 36,
            date: '2020-02-03',
          },
          {
            id: 2,
            name: 'Java',
            instructor: 'Genival',
            local: 'Softex',
            hours: 60,
            date: '2020-02-06',
          },
        ];
  }

  addCourse(course: Course): void {
    const courses = this.allCourses();

    if (courses.length === 0) {
      course.id = 1;
    } else {
      course.id = (courses[courses.length - 1].id as any) + 1;
    }
    courses.push(course);
    localStorage[LOCAL] = JSON.stringify(courses);
  }

  delete(id: number): void {
    let courses: Course[] = this.allCourses();

    courses = courses.filter((course) => course.id !== id);
    localStorage[LOCAL] = JSON.stringify(courses);
  }

  findForId(id: number): Course | undefined {
    const courses: Course[] = this.allCourses();

    return courses.find((course) => course.id === id);
  }

  editCourse(course: Course): void {
    const courses = this.allCourses();
    courses.forEach((obj, index, objs) => {
      if (course.id === obj.id) {
        objs[index] = course;
      }
    });
    localStorage[LOCAL] = JSON.stringify(courses);
  }
}
