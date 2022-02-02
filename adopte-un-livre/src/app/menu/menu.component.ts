import { Component, Input } from '@angular/core';
import { AnimationEvent } from "@angular/animations";
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from './keyframes';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]
})

export class MenuComponent{
  public index = 0;
  @Input()
  parentSubject!: Subject<any>;

  animationState!: string;
  constructor() { }

  ngOnInit() {
    this.parentSubject.subscribe(event => {
      this.startAnimation(event)
    });
  }

  startAnimation(state: string) {
  if (!this.animationState) {
    this.animationState = state;
  }
  }

  resetAnimationState(state: string) {
    this.animationState = '';
    this.index++;
  }
  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }


}
