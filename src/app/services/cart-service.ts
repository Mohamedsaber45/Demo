import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = "my_cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _items = new BehaviorSubject<ICartItem[]>(this.loadFromStorage());
  readonly items$ = this._items.asObservable();

  get items(): ICartItem[] {
    return this._items.value;
  }

  private save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.items));
    this._items.next([...this.items]);
  }

  private loadFromStorage(): ICartItem[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        return JSON.parse(raw);
      }
    } catch { }
    return [];
  }

  add(product: IProduct, qty = 1) {
    const existing = this.items.find(i => i.product.id === product.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      this.items.push({ product: product, quantity: qty });
    }
    this.save();
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.remove(productId);
      return;
    }
    const item = this.items.find(i => i.product.id === productId);
    if (item) {
      item.quantity = quantity;
      this.save();
    }
  }

  remove(productId: number) {
    const filtered = this.items.filter(i => i.product.id !== productId);
    this._items.next(filtered);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  }

  clear() {
    this._items.next([]);
    localStorage.removeItem(STORAGE_KEY);
  }

  getTotalCount(): number {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }

  getTotalPrice(): number {
    return this.items.reduce((sum, i) => sum + i.quantity * i.product.price, 0);
  }
}
