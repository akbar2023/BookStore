import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private api : string = "https://www.googleapis.com/books/v1/";

  constructor(private http : HttpClient) { }

  search(title : string, author: string, isbn: string, startIndex : number = 0) {
    let url = this.api + 'volumes?q=';
    if(title)
    url += 'intitle:'+title;
    if(author)
    url += ' inauthor:'+author;
    if(isbn)
      url += ' isbn:'+isbn;
    return (this.http.get(url + '&maxResults=40&startIndex=' + startIndex));
    }
  
}
