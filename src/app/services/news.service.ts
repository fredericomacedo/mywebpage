import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  //private baseUrl = 'http://localhost:3000';  // Change to your server's address and port if different
  private baseUrl = 'https://market-news-api-b456dd0c70b8.herokuapp.com/news';
 

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tech`);
  }

  getCompanyOverview(symbol: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/overview?symbol=${symbol}`);
  }
}
