import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    message: new FormControl('', [Validators.required, Validators.minLength(100), Validators.maxLength(800)])
  });

  constructor(private router: Router) { }

  submitData() {
    return this.router.navigate(['/']);
  }
}
