import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsService } from '../services/news.service';
import { NewsApiResponse } from './news.module';  // Adjust the path if you place the model in a different location
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsData: any[] = [];
  isLoading: boolean = true;  // for loading spinner
  error: any = null;          // for error messages


  constructor(private http: HttpClient, private newsService: NewsService) { }

  ngOnInit(): void {
    this.fetchNews();
  }

  fetchNews(): void {
    this.isLoading = true;
    this.newsService.getNews().pipe(
      catchError(error => {
        this.error = error;
        this.isLoading = false;
        return throwError(error);
      })
    ).subscribe(
      data => {
        this.newsData = data.feed;
        this.isLoading = false;
        console.log(this.newsData);
      }
    );
  }

}

