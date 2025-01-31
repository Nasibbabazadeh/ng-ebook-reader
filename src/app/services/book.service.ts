import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { Observable } from 'rxjs';
import { IBook } from '../shared/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private readonly _endpoint: string = 'books';
  constructor(private _genericService: GenericService) {}

  getAllBooks(): Observable<IBook[]> {
    return this._genericService.get(this._endpoint);
  }

  getBookById(id: number) {
    return this._genericService.get(`${this._endpoint}/${id}`);
  }

  searchBookByName(name: string) {
    return this._genericService.get(`${this._endpoint}/?search=${name}`);
  }
}
