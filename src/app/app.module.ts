// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './inc/navbar/navbar.component';
import { BookComponent } from './book/book.component';

import { FilterPipe } from './pipes/filterPipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NavbarComponent, AppComponent]
})
export class AppModule { }
