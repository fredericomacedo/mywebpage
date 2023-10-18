import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //private baseUrl = 'http://localhost:3000';  // Change to your server's address and port if different
  private baseUrl = 'https://alphaserverapi-bcbe02aa8105.herokuapp.com';

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/news`);
  }
}
