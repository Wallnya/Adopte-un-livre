import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule} from '@angular/material/list';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwipComponent } from './swip/swip.component';
import { HomeComponent } from './home/home.component';
import { MenuSwipComponent } from './menu-swip/menu-swip.component';
import { HeaderComponent } from './header/header.component';
import { ParametersComponent } from './parameters/parameters.component';
import { AddBookComponent } from './add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    SwipComponent,
    HomeComponent,
    MenuSwipComponent,
    HeaderComponent,
    ParametersComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatListModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
