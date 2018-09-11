import { Component } from '@angular/core';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: any[] = [
    {isbn : 'JK45JOL55', name :  'Il Conte di Montecristo', price : 19.99, qty : 5, qty_chosen: undefined},
    {isbn : 'PH78KLD76', name :  'Dieci Piccoli Indiani', price : 9.99, qty : 7, qty_chosen : undefined},
    {isbn : 'BD23HUL82', name :  'Notti Bianche', price : 14.99, qty : 3, qty_chosen : undefined}
  ]

  cart: any[] = []

  constructor() {  }

  updateCart(product) {
    this.cart.push(product);
    console.log('Il carrello contiene: ', this.cart);
  }

}
