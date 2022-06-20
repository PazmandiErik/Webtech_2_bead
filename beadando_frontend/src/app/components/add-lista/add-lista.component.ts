import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { ListaService } from 'src/app/services/lista.service';

@Component({
  selector: 'app-add-lista',
  templateUrl: './add-lista.component.html',
  styleUrls: ['./add-lista.component.css']
})

export class AddListaComponent implements OnInit {
  listaElem: Lista = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
  }

  saveLista(): void {
    const data = {
      title: this.listaElem.title,
      description: this.listaElem.description
    };
    this.listaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newLista(): void {
    this.submitted = false;
    this.listaElem = {
      title: '',
      description: '',
      published: false
    };
  }
}