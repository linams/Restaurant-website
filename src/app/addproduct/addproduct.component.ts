import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-addproduct',  // Changed to 'addproduct' without a dash
  standalone: true,
  imports: [FormsModule, RouterLink], // Add FormsModule for two-way binding
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddProductComponent implements OnInit {
  // Object to store form data for product
  product = {
    productName: '',
    productUrl: '',
    productPrice: '',
    productCategory: ''
  };

  // Injecting HttpClient for making HTTP requests
  http = inject(HttpClient);

  // Method to send form data to the backend
  addProduct() {
    this.http.post('http://localhost:3002/products', this.product).subscribe(
      (response) => {
        // Show success message
        alert('Product added successfully!');
        
        // Reset form fields
        this.clearForm();
      },
      (error) => {
        console.log(error);
        // Optional: show an error alert if adding fails
        alert('Failed to add product. Please try again.');
      }
    );
  }

  // Method to clear form fields
  clearForm() {
    this.product = {
      productName: '',
      productUrl: '',
      productPrice: '',
      productCategory: ''
    };
  }

  ngOnInit(): void {
    // This method could be used to fetch data if needed
  }
}

