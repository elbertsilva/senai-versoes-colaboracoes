import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cadastro } from '../model/cadastro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CadastroCreateService {
  baseUrl = 'http://localhost:3001/login';

  constructor(private http: HttpClient) {}

  create(cadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(this.baseUrl, cadastro);
  }
}
