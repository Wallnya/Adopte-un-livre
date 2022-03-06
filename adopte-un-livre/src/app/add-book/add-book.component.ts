import { Component, OnInit } from '@angular/core';
import { Book } from '../swip/book';
import { BookService } from '../book.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit{

  constructor(private monService: BookService, private formBuilder: FormBuilder){}
  book1!: Book[];
  book = new Book();
  addBookForm!: FormGroup;

  ngOnInit() {
    this.addBookForm = this.formBuilder.group({
      author: [null, [Validators.required]],
      name: [null, [Validators.required]],
      genre1: [null, [Validators.required]],
      genre2: [null, [Validators.required]],
      genre3: [null, [Validators.required]]
  });

  }

  addBook() {
    this.monService.addBook(this.book)
      .subscribe(data => {
        console.log(data)
      });
  }
}
