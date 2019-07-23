import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  searchQuery : string = '';
  searchAuthor : string = '';
  searchIsbn : string = '';
  searchResults = null;

  constructor(private bookService : BooksService) { 
   }

  ngOnInit() {
  }

  search() {
    this.bookService.search(this.searchQuery, this.searchAuthor, this.searchIsbn).subscribe((data) => {
      console.log(data.items);
      this.searchResults = data;
    }, (error) => {
      console.log(error);
    });
  }

  showMore() {
    this.bookService.search(this.searchQuery, this.searchAuthor, this.searchIsbn, this.searchResults.items.length).subscribe((data) => {
      console.log(data);
      this.searchResults.items.push(...data.items);
    }, (error) => {
      console.log(error);
    });
  }

}
