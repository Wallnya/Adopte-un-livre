import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuSwipComponent } from './menu-swip/menu-swip.component';
import { HomeComponent } from './home/home.component';
import { ParametersComponent } from './parameters/parameters.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
   { path: 'add', component: AddBookComponent },
   { path: 'parameters', component: ParametersComponent },
   { path: 'swip', component: MenuSwipComponent },
   { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
