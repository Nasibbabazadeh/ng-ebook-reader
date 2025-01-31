import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-search',
  imports: [],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.css'
})
export class BookSearchComponent {
  loading: boolean = false
  constructor(
    private readonly _bookService: BookService
  ) { }
  searchBookByName(bookName: string) {
    return this._bookService.searchBookByName(bookName).subscribe({
      next: (response) => {
        this.loading = true
        console.log(response)
      },
      complete: () => {
        this.loading = false
      }
    })
  }
  downloadBook(id: number) {
    window.open("https://www.gutenberg.org/files/" + id + "/" + id + "-0.zip", '_blank');
  }
}
