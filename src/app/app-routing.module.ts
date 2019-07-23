import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { HTTPErrorComponent } from './httperror/httperror.component';
const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', component: HTTPErrorComponent, data: {code:404, message: 'Not Found'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
