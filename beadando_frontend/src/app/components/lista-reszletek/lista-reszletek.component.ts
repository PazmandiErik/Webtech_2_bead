import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
@Component({
  selector: 'app-lista-reszletek',
  templateUrl: './lista-reszletek.component.html',
  styleUrls: ['./lista-reszletek.component.css']
})
export class ListaReszletekComponent implements OnInit {
  currentLista: Lista = {
    title: '',
    description: '',
    published: false
  };
  message = '';
  constructor(
    private listaService: ListaService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.message = '';
    this.getLista(this.route.snapshot.params['id']);
  }
  getLista(id: string): void {
    this.listaService.get(id)
      .subscribe(
        data => {
          this.currentLista = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}