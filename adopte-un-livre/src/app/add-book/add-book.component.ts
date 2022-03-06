import { Component, OnInit } from '@angular/core';
import { Book } from '../swip/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit{

  constructor(private monService: BookService){}
  book1!: Book[];
  book = new Book();

  ngOnInit() {}

  addBook() {
    this.monService.addBook(this.book)
      .subscribe(data => {
        console.log(data)
      });
  }
}
