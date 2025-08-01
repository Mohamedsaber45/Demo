import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product',
  imports: [CommonModule, NgxPaginationModule, RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  categories: string[] = [];
  selectedCategory = 'All';
  page = 1;

  constructor(private productService: ProductService, private cart: CartService) {
    this.products = productService.products;
    this.filteredProducts = this.products;
    this.categories = ['All', ...new Set(this.products.map(p => p.category))];
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.page = 1;
    this.filteredProducts =
      category === 'All'
        ? this.products
        : this.products.filter(p => p.category === category);
  }

  addToCart(product: IProduct) {
    this.cart.add(product, 1);
  }

  getQuantity(product: IProduct): number {
    const item = this.cart.items.find(i => i.product.id === product.id);
    return item ? item.quantity : 0;
  }

  isInCart(product: IProduct): boolean {
    return this.getQuantity(product) > 0;
  }
}
