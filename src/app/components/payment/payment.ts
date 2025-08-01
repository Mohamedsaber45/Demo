import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-payment',
  imports: [FormsModule],
  templateUrl: './payment.html',
  styleUrl: './payment.css'
})
export class Payment {
  constructor(private cartService: CartService, private router: Router) { }

  onSubmit() {
    this.cartService.clear();
    alert('Payment submitted successfully!');
    this.router.navigate(['/']);
  }
}
