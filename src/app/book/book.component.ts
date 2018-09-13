import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() theBook: any;
  @Input() reset: boolean;
  @Output() em: EventEmitter<any> = new EventEmitter();

  @Input() dynamicdata: string;


  isLeft: boolean = true;

  ngOnInit() { console.log('onInit: ' + this.reset) }

  constructor() { }

  addToCart(book: any) {
    this.em.emit(book);
    this.theBook.qty_temp = this.theBook.qty_temp - this.theBook.qty_chosen;
    this.theBook.qty_chosen = undefined;
    this.theBook.qty_temp == 0 ? this.isLeft = !this.isLeft : this.isLeft == true;
    this.reset = false;
    console.log(this.reset)
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
