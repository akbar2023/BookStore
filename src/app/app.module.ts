import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HttpClientModule } from '@angular/common/http';
import{Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {BookListComponent} from './book-list/book-list.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {HTTPErrorComponent} from './httperror/httperror.component';
import { CartComponent } from './cart/cart.component';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    HTTPErrorComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
