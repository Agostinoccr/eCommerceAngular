import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() theBook: any;
  @Output() em: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addToCart(book: any) {
    this.em.emit(book);
  }

  isQtyValid() {

    if (
      this.theBook.qty_chosen > this.theBook.qty ||
      this.theBook.qty_chosen == undefined ||
      isNaN(Number(this.theBook.qty_chosen)) ||
      this.theBook.qty_chosen <= 0
    )
      return true
    else
      return false

  }

}
