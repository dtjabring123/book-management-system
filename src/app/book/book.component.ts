import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  ngOnInit(): void {
    this.books = this.getAllBooks();
  }

  newBookTitle: string = '';
  newBookAuthor: string = '';
  books: Book[] = [];

  addBook() {
    if (this.newBookTitle.trim().length && this.newBookAuthor.trim().length) {
      let newBook: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor,
      };
      this.books.push(newBook);
      this.newBookTitle = '';
      this.newBookAuthor = '';

      localStorage.setItem('books', JSON.stringify(this.books));
    }
  }

  deleteBook(index: number) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  getAllBooks(): Book[] {
    let savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  }
}
