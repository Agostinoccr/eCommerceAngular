// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Component
import { AppComponent } from './app.component';
import { NavbarComponent } from './inc/navbar/navbar.component';
import { BookComponent } from './book/book.component';

import { FilterPipe } from './pipes/filterPipe';
import { FooterComponent } from './inc/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookComponent,
    FilterPipe,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [NavbarComponent, AppComponent, FooterComponent]
})
export class AppModule { }
