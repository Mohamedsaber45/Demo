import { Routes } from '@angular/router';
import { Land } from './components/land/land';
import { ProductDetails } from './components/product-details/product-details';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { App } from './app';
import { Cart } from './components/cart/cart';
import { Payment } from './components/payment/payment';

export const routes: Routes = [
  { path: '', component: Land },
  { path: 'details/:id', component: ProductDetails },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'cart', component: Cart },
  { path: 'payment', component:Payment}
];
