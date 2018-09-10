import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './inc/navbar/navbar.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [NavbarComponent, AppComponent]
})
export class AppModule { }
