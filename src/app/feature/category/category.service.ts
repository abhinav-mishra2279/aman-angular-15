import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = environment.apiBaseUrl + '/api/v1/categories'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Category[]>(this.apiUrl)
  }

  delete(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }
}
