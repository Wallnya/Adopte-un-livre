import { Component, Input} from '@angular/core';
import data from '../../assets/books.json';
import { Book } from '../swip/book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-chat',
  templateUrl: './menu-chat.component.html',
  styleUrls: ['./menu-chat.component.scss']
})
export class MenuChatComponent{
  @Input() book1!: Book;
  public books: Book[] = data['books'];
  public index = 0;
  constructor(private monService: BookService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onViewFaceSnap(id: number) {
    console.log(id);
    this.router.navigateByUrl(`menu-chat/${id}`);
  }
  startAnimation(state: number) {
    this.index = state;
  }

}
