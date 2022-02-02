import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SwipCardComponent } from './swip-card/swip-card.component';


const routes: Routes = [
   { path: 'swipeCard', component: SwipCardComponent },
   { path: '', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
