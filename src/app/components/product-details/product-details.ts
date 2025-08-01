import { Component } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  product: IProduct | undefined;

  constructor(private productService: ProductService, route: ActivatedRoute) {
    const id = Number(route.snapshot.paramMap.get('id'));
    this.product = productService.getProductById(id);
  }
}
