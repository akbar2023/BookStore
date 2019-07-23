import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  public book : any = null;

  constructor(private route : ActivatedRoute, private booksService : BooksService) { }

  ngOnInit() {
    this.route.params.subscribe((params : Params) => {
      this.booksService.select(params.id).subscribe((data : any) => {
        this.book = data;
      });
    });
  }

}
