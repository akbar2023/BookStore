import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private api : string = "https://www.googleapis.com/books/v1/";

  constructor(private http : HttpClient) { }

  search(search : string, startIndex : number = 0) {
    return (this.http.get(this.api + 'volumes?q=' + search + '&maxResults=40&startIndex=' + startIndex));
  }
}
