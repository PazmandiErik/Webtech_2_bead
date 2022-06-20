import { Component, OnInit } from '@angular/core';
import { Lista } from 'src/app/models/lista.model';
import { ListaService } from 'src/app/services/lista.service';
import { UserService } from '../../_services/user.service';


@Component({
  selector: 'app-lista-list',
  templateUrl: './lista-list.component.html',
  styleUrls: ['./lista-list.component.css']
})

export class ListaListComponent implements OnInit {

  lista?: Lista[];
  currentLista: Lista = {};
  currentIndex = -1;
  title = '';

  constructor(private listaService: ListaService, private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getUserBoard().subscribe(
      data => {
        this.retrieveLista();  
      }
    );
  }
  retrieveLista(): void {
    this.listaService.getAll()
      .subscribe(
        data => {
          this.lista = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveLista();
    this.currentLista = {};
    this.currentIndex = -1;
  }
  setActiveLista(lista: Lista, index: number): void {
    this.currentLista = lista;
    this.currentIndex = index;
  }





}