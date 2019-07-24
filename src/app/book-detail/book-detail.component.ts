import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksService } from '../services/books.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  public book : any = null;

  constructor(private route : ActivatedRoute, private booksService : BooksService, private cartService: CartService) { }
  

  ngOnInit() {    
    this.route.params.subscribe((params : Params) => {
      this.booksService.select(params.id).subscribe((data : any) => {
      
          
        this.book = data
        console.log(data)
      });
    });
  }

  addToCart(book) {
    // window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(book);
  }
}

