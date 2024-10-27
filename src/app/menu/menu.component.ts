import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  httpclient=inject(HttpClient)

  productsarray :any[]=[]
  fetchdata(){
  this.httpclient.get('http://localhost:3002/products').subscribe((respose:any)=>this.productsarray=respose)

  }
  ngOnInit(): void {
    this.fetchdata()
  }

}
