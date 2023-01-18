import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import { Homepage } from './pagina-inicial/pagina-inicial.component';
import { AddCourseComponent } from './adicionar-curso/adicionar-curso.component';
import { courseService } from './services/curso.service';
import { NgbTooltipModule, NgbDatepickerModule  } from '@ng-bootstrap/ng-bootstrap';
import { EditCourseComponent } from './editar-curso/editar-curso.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    Homepage,
    AddCourseComponent,
    EditCourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbTooltipModule,
    NgbDatepickerModule,
    NgbToastModule
  ],
  providers: [
    courseService
  ]
})
export class CourseModule {
	
  
}
