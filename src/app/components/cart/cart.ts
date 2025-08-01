import { Component } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cart: CartService) { }

  increment(item: any) {
    this.cart.updateQuantity(item.product.id, item.quantity + 1);
  }

  decrement(item: any) {
    this.cart.updateQuantity(item.product.id, item.quantity - 1);
  }

  remove(item: any) {
    this.cart.remove(item.product.id);
  }

  clear() {
    this.cart.clear();
  }
}
