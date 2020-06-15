import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  searchQuery = '';
  searchAuthor = '';
  searchIsbn = '';
  searchResults = null;
  searchAverageRating: number;

  constructor(private bookService: BooksService) {
  }

  ngOnInit() {
  }

  search() {
    this.bookService.search(this.searchQuery, this.searchAuthor, this.searchIsbn, this.searchAverageRating).subscribe((data) => {
      console.log(data.items);
      this.searchResults = data;
    }, (error) => {
      console.log(error);
    });
  }

  showMore() {
    this.bookService.search(this.searchQuery, this.searchAuthor, null, null, this.searchResults.items.length).subscribe((data) => {
        console.log(data);
        this.searchResults.items.push(...data.items);
      }, (error) => {
        console.log(error);
      });
  }

}
