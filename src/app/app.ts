import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Navbar } from "./components/navbar/navbar";
import { Footer } from "./components/footer/footer";
import { CommonModule } from '@angular/common';
import { Product } from "./components/product/product";
import { NgxPaginationModule } from 'ngx-pagination';
import { Land } from "./components/land/land";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, CommonModule, Product, NgxPaginationModule, Land],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Demo';
  public isHomePage = false;

  constructor(public router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isHomePage = event.urlAfterRedirects === '/';
    });
  }
}
