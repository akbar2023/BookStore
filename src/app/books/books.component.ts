import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  searchQuery : string = '';
  searchResults = null;

  constructor(private bookService : BooksService) { 
   }

  ngOnInit() {
  }

  search() {
    this.bookService.search(this.searchQuery).subscribe((data) => {
      console.log(data);
      this.searchResults = data;
    }, (error) => {
      console.log(error);
    });
  }

  showMore() {
    this.bookService.search(this.searchQuery, this.searchResults.items.length).subscribe((data) => {
      console.log(data);
      this.searchResults.items.push(...data.items);
    }, (error) => {
      console.log(error);
    });
  }

}
