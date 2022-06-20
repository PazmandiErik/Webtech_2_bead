import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lista } from '../models/lista.model';
const baseUrl = 'http://localhost:8080/api/lista';
@Injectable({
  providedIn: 'root'
})
export class ListaService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Lista[]> {
    return this.http.get<Lista[]>(baseUrl);
  }
  get(id: any): Observable<Lista> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}