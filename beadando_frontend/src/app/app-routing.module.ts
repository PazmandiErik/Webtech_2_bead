import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaListComponent } from './components/lista-list/lista-list.component';
import { ListaReszletekComponent } from './components/lista-reszletek/lista-reszletek.component';
import { AddListaComponent } from './components/add-lista/add-lista.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'lista', component: ListaListComponent },
  { path: 'lista/:id', component: ListaReszletekComponent },
  { path: 'add', component: AddListaComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }