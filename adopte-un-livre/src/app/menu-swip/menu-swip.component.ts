import { Component} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu-swip',
  templateUrl: './menu-swip.component.html',
  styleUrls: ['./menu-swip.component.scss']
})
export class MenuSwipComponent{
  parentSubject:Subject<string> = new Subject();

  constructor() {}
  cardAnimation(value: string) {
    this.parentSubject.next(value);
  }

}
