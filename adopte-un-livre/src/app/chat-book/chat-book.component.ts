import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../swip/book';
import data from '../../assets/books.json';

@Component({
  selector: 'app-chat-book',
  templateUrl: './chat-book.component.html',
  styleUrls: ['./chat-book.component.scss']
})
export class ChatBookComponent implements OnInit {
  book!: Book;
  books: Book[] = data['books'];
  index!: number;

  constructor(private monService: BookService,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    const bookId = this.route.snapshot.params['id'];
    this.index = bookId-1;
  }

}
