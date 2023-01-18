import { Component, OnInit, ViewChild } from '@angular/core';
import { Course } from 'src/app/shared/models/curso.model';
import { courseService } from '../services/curso.service';
import { NgForm } from '@angular/forms';
import { NgbModal  } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})

export class Homepage implements OnInit{
  @ViewChild ('formNomeCurso') formNameCourse! : NgForm
  @ViewChild ('formEdit') formEdit! : NgForm
  search! : string
  courses : Course[] = []
  closeResult = ''

  constructor(private courseService: courseService,
    private modalService: NgbModal) { }

    

  ngOnInit(): void { //O ngOnInit serve para quando a aplicação for aberta vai executar o que tem dentro
    this.courses = this.allCourses()// Vai chamar o listarTodos
    
  }
  allCourses(): Course[] {
    return this.courseService.allCourses() //Vai executar a função armazenada no service do pessoaService
   }

   searchName(){
    let allCourses = JSON.parse(localStorage['courses'])
    return this.courses = allCourses.filter((course:any)=>{
       return course.name?.toLowerCase().includes(this.search.toLowerCase())
     })
   }


   delete($event: any, course: Course): void {
    $event.preventDefault()
    if(confirm(`Deseja realmente remover o curso: ${course.name}?`)){
      this.courseService.delete(course.id!)
      this.courses = this.allCourses()
    }
   }

}
