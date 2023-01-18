import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './curso/adicionar-curso/adicionar-curso.component';
import { Homepage } from './curso/pagina-inicial/pagina-inicial.component';
import { EditCourseComponent } from '../app/curso/editar-curso/editar-curso.component';

const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'adicionar', component: AddCourseComponent },
  { path: 'editar/:id', component: EditCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
