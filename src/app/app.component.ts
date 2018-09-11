import { Component } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: any[] = [
    {isbn : 'JK45JOL55', name :  'The Count of Monte Cristo', price : 19.99, qty : 5, qty_chosen: undefined},
    {isbn : 'PH78KLD76', name :  'Ten Little Niggers', price : 9.99, qty : 7, qty_chosen : undefined},
    {isbn : 'BD23HUL82', name :  '1984', price : 14.99, qty : 3, qty_chosen : undefined},
    {isbn : 'SQ78GAO51', name :  'Divine Comedy', price : 24.99, qty : 9, qty_chosen : undefined}
  ]

  cart: any[] = []
  total: number = 0.00;

  constructor() {  }

  updateCart(product: any) {

    product.qty_chosen = Number(product.qty_chosen);

    // is the product already in cart?
    if (this.cart.length > 0) {
      this.cart.forEach(e => {
        if (e.isbn == product.isbn) e.qty_chosen += product.qty_chosen
        // add to cart
        else this.cart.push(Object.assign({}, product))
      });
  } else {
    this.cart.push(Object.assign({}, product))
  }
    this.calculateTotal()
    console.log('Il carrello contiene: ', this.cart);

  }

  calculateTotal() {

    this.total = 0.00;

    this.cart.forEach(e => {
      this.total += (e.qty_chosen * e.price)
    });

  }

  emptyCart() {
    this.cart = []
    this.total = 0.00;
  }

  addShipping(price: number) {
    this.calculateTotal();
    this.total += price;
  }

}
