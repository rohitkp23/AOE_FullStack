import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatCardModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private user: UserService, private router: Router) {}

  performsignup() {
    this.user.performSignup(this.username, this.password).subscribe({
      next: (response) => {
        alert('Signup successful');
        this.router.navigate(['/login']);
        this.errorMessage = ''; // Clear any previous error messages
      },
      error: (error) => {
        console.error('Error during signup', error);
        // Handle different error cases
        if (error.status === 409) { // Assuming 409 for duplicate username
          this.errorMessage = 'This username is already taken. Please choose another.';
        } else {
          this.errorMessage = 'An error occurred. Please try again later.';
        }
      },
    });
  }
}
