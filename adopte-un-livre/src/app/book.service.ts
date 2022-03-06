import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './swip/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseURL: string = "http://localhost:3000/";


  constructor(private http: HttpClient) { }

  getBook(): Observable<Book[]> {
    console.log('getBook '+this.baseURL + 'books')
    return this.http.get<Book[]>(this.baseURL + 'books')
  }

  addBook(book:Book): Observable<any> {
    const headers = { 'content-type': 'application/json'};
    book['picture']="/assets/test.jpg"; //a picture waiting for a better one
    const body=JSON.stringify(book);
    console.log(body);
    return this.http.post(this.baseURL + 'books', body,{'headers':headers})
  }
}