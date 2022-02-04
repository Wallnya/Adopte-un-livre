import { Component, Input } from '@angular/core';
import { AnimationEvent } from "@angular/animations";
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from './keyframes';
import { Book } from './book';
import data from './books.json';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './swip.component.html',
  styleUrls: ['./swip.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]
})

export class SwipComponent{
  public books: Book[] = data;
  public index = 4;
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

  resetAnimationState(state: any) {
    //Si c'est un click, on active le processus
    if(this.animationState){
      this.index++;
      this.animationState = '';
    }
    //Si on arrive à la fin, on boucle
    else if(this.index === this.books.length){
      this.index=0;
      this.animationState = '';
    }
  }
  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }
}
