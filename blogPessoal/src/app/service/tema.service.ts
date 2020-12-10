import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token')!)
  }

  getAllTemas() : Observable<Tema[]> {
    return this.http.get<Tema[]>('http://localhost:9000/tema', this.token)
  }

  getByIdTema(id: number) {
    return this.http.get(`https://localhost:9000/tema/${id}`, this.token)
  }

  postTema(tema: Tema) {
    return this.http.post('http://localhost:9000/tema', tema, this.token)
  }

  putTema(tema: Tema) {
    return this.http.put('http://localhost:9000/tema', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`https://localhost:9000/tema/${id}`, this.token)
  }
}