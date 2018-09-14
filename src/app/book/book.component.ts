import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() theBook: any;

  @Output() em: EventEmitter<any> = new EventEmitter();
  @Output() empty: EventEmitter<any> = new EventEmitter();

  isLeft: boolean = true;
  reset: boolean;
  isDisable: boolean = true;

  constructor() { }

  addToCart(book: any) {
    this.em.emit(book);
    this.theBook.qty_temp = this.theBook.qty_temp - this.theBook.qty_chosen;
    this.theBook.qty_chosen = undefined;
    this.theBook.qty_temp == 0 ? this.isLeft = !this.isLeft : this.isLeft == true;

    this.reset = false;
    this.isDisable = false;
  }

  emptyCart(book: any) {
    this.theBook.qty_temp = this.theBook.qty;
    this.reset = true;
    this.isDisable = true;
    this.isLeft = true;
    this.empty.emit(book);
  }

  isQtyValid() {

    if (
      this.theBook.qty_chosen > this.theBook.qty_temp ||
      this.theBook.qty_chosen == undefined ||
      isNaN(Number(this.theBook.qty_chosen)) ||
      this.theBook.qty_chosen <= 0
    )
      return true
    else
      return false

  }

}
