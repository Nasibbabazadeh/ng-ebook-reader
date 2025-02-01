import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { IBook, IBookResponse } from '../../shared/models/book.model';
import { SpinnerComponent } from '../../components/spinner/spinner.component';

@Component({
  selector: 'app-book',
  imports: [SpinnerComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
  loading: boolean = false;
  booksData!: IBook[];
  constructor(private _bookService: BookService) {}
  fetchAllBooks() {
    this.loading = true;
    this._bookService.getAllBooks().subscribe({
      next: (response: IBookResponse) => {
        console.log(response.results);
        this.booksData = response?.results;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  ngOnInit(): void {
    this.fetchAllBooks();
  }
}
