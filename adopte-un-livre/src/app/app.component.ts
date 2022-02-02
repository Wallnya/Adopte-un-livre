import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { faTimes, faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adopte-un-livre';
  faTimes = faTimes;
  faHeart = faHeart;
  parentSubject:Subject<string> = new Subject();

  constructor() {}
  cardAnimation(value: string) {
    this.parentSubject.next(value);
  }
}
