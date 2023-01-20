import { Component} from '@angular/core';
import { Course } from 'src/app/shared/models/curso.model';
import { courseService } from '../services/curso.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
})

export class Homepage {
  search!: string;
  courses: Course[] = [];
  closeResult = '';

  constructor(private courseService: courseService) {}

  ngOnInit(): void {
    this.courses = this.allCourses();
  }
  allCourses(): Course[] {
    return this.courseService.allCourses();
  }

  searchName() {
    let allCourses = this.courseService.allCourses()
    return (this.courses = allCourses.filter((course: any) => {
      return course.name?.toLowerCase().includes(this.search.toLowerCase());
    }));
  }

  delete($event: any, course: Course): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o curso: ${course.name}?`)) {
      this.courseService.delete(course.id!);
      this.courses = this.allCourses();
    }
  }
}
