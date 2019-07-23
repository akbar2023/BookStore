import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
// import { HttpClientModule } from '@angular/common/http';
import{Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {HTTPErrorComponent} from './httperror/httperror.component';
const appRoutes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', component: HTTPErrorComponent, data: {code:404, message: 'Not Found'} }
]

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookListComponent,
    BookDetailComponent,
    HTTPErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
