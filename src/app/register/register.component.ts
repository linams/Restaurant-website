
/*import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{
  http=inject(HttpClient)
  formData:any;
    fetchData(e:any){
      e.preventDefault()
      this.formData=new FormData(e.target)
      console.log(this.formData.get('userName'));

      this.http.post('http://localhost:3003/users/register',this.formData)
      .subscribe(response =>{
        console.log('User registered', response);
        alert('User registered successfully');});

}}
*/
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,RouterLink], // Add FormsModule for two-way binding
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  // Object to store form data dynamically
  data = {
    userName: '',
    userPassword: '',
    userEmail: '',
    userGender: '',
    userPhone: ''
  };

  // Injecting HttpClient for making HTTP requests
  http = inject(HttpClient);

  // Method to send form data to the backend
  sendData() {
    this.http.post('http://localhost:3002/users/register', this.data).subscribe(
      (response) => {
        // Show success message
        alert('Registered successfully!');
        
        // Reset form fields
        this.clearForm();
      },
      (error) => {
        console.log(error);
        // Optional: show an error alert if registration fails
        alert('Registration failed. Please try again.');
      }
    );

  }

  clearForm() {
    this.data = {
      userName: '',
      userPassword: '',
      userEmail: '',
      userGender: '',
      userPhone: ''
    };
  }

  ngOnInit(): void {
    // This method could be used to fetch data if needed
  }
}