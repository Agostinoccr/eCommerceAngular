import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  readonly ROOT_URL = './assets/api';

  products: Product[];

  cart: any[] = [];
  total: number = 0.00;

  constructor(private http: HttpClient) {
    // GET books from db.json
    this.http.get<Product[]>(this.ROOT_URL + '/db.json').subscribe(data => this.products = data)
  }

  updateCart(product: any) {

    product.qty_chosen = Number(product.qty_chosen);

    // is the product already in cart?
    let obj = this.cart.find( el => el.isbn == product.isbn);

    if (obj) {
      obj.qty_chosen += product.qty_chosen
      } else {
        this.cart.push(Object.assign({}, product))
      }

    this.calculateTotal();
    console.log('Il carrello contiene: ', this.cart);

  }

  calculateTotal() {

 /*   Older method:

      this.total = 0.00;
      this.cart.forEach(e => {
      this.total += (e.qty_chosen * e.price);
      this.total = Math.round(this.total * 100) / 100;
    }); */

    this.total = Math.round(this.cart.reduce((tot, e) => tot += (e.qty_chosen * e.price), 0) * 100) / 100
  }

  emptyCart() {
    this.cart = [];
    this.total = 0.00;
  }

  addShipping(price: number) {
    this.calculateTotal();
    this.total = Math.round((this.total += price) * 100) / 100;
  }

  checkout() {
    this.cart = [];
    this.total = 0.00;
  }

}
