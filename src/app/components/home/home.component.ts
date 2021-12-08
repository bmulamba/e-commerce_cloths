import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from './../../services/product/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  constructor( private productService : ProductService ) { }

  products : Product[] = [];

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      res => {
        this.products = res;
      }
    )
  }

}
