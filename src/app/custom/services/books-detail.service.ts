import { Injectable } from '@angular/core';
import {Book} from '../Book'

@Injectable()
export class BookDetService {
  log(message: any) {
    console.log(message);
  }
}


@Injectable()
export class BookService {
  constructor(private bookDetSrv: BookDetService) {
    console.log('Product Service Created');
  }

  public getBooks() {
    this.bookDetSrv.log('Books called');
    let books: Book[];

    books = [
      new Book('OOPS', 'Programming Language'),
    ];

    this.bookDetSrv.log(books);
    return books;
  }
}