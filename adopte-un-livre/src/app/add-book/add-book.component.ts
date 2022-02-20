import { Component, OnInit } from '@angular/core';
import { Book } from '../swip/book';
import data from '../swip/books.json';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit{
   genre1: string[] =  [];

//Property for the user
  public books: Book[] = data;

  ngOnInit() {
  this.genre1 =  ['Conte', 'Poésie', 'Roman'];
  var length = data.length;
  //Create a new user object
   this.books[0] = new Book({
       id:length, picture:"",author:"",name:"",genre1:""});
    }

}
