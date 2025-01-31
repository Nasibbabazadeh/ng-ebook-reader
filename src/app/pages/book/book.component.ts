import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { IBook } from '../../shared/models/book.model';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {
  loading: boolean = false
  constructor(
    private _bookService: BookService
  ) { }
  fetchAllBooks() {
    this._bookService.getAllBooks().subscribe({
      next: (books: IBook[]) => {
        this.loading = true
        console.log(books)
      },
      complete: () => this.loading = false
    })
  }
  ngOnInit(): void {
    this.fetchAllBooks()
  }
}
