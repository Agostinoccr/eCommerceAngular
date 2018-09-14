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
    this.http.get<Product[]>(this.ROOT_URL + '/db.json').subscribe(data => this.products = data);
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

    this.addShipping();
    console.log('Il carrello contiene: ', this.cart);

  }

  calculateTotal() {
    this.total = Math.round(this.cart.reduce((tot, e) => tot += (e.qty_chosen * e.price), 0) * 100) / 100
  }

  resetCart(product: any) {

    let index = this.cart.findIndex(  el => el.isbn == product.isbn );
    if (index > -1) this.cart.splice(index, 1)

    this.calculateTotal();
    console.log('Il carrello contiene: ', this.cart);

  }

  addShipping(price: number = 2.99) {
    this.calculateTotal();
    this.total = Math.round((this.total += price) * 100) / 100;
  }

  checkout() {
    this.cart = [];
    this.total = 0.00;
    location.reload()
  }

}
