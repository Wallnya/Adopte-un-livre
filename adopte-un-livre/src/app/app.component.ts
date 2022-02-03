import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adopte-un-livre';
  parentSubject:Subject<string> = new Subject();

  constructor() {}
  cardAnimation(value: string) {
    this.parentSubject.next(value);
  }
}
