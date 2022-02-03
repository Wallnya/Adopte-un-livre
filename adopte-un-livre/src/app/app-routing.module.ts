import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SwipComponent } from './swip/swip.component';


const routes: Routes = [
   { path: '', component: SwipComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
