import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private api: string = "https://www.googleapis.com/books/v1/";

  constructor(private http: HttpClient) { }

  search(title: string, author: string, isbn: string, averageRating: number, startIndex: number = 0): Observable<any> {
    let url = this.api + 'volumes?q=';
    if (title) { 
      url += 'intitle:' + title;
    }
    if (author) {
      url += ' inauthor:' + author;
    }
    if (isbn) {
      url += ' isbn:' + isbn;
    }
    if (averageRating) {
      url += 'averageRating' + averageRating;
    }
    return (this.http.get<any>(url + '&maxResults=10&startIndex=' + startIndex));
  }

  select(id: string): Observable<any> {
    return (this.http.get<any>(this.api + 'volumes/' + id));
  }

}
