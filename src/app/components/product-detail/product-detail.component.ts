import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public productId : any;

  public products : Product[];

  public product : Product;

  public count = 1;

  showItems : boolean = true;

  isAvailble : true;

  constructor( private _router : ActivatedRoute,
               private Route: Router,
               private productService : ProductService ) { }


  ngOnInit(): void {
    this.productId = this._router.snapshot.paramMap.get('id');

    this.productService.find(this.productId).subscribe(
      (res : Product) => {
        this.product = res;
      }
    ) ;

    this.productService.getAll().subscribe(
      data => {
        this.products =data;
      }
    )
  }

  goHome() {
    this.Route.navigateByUrl('/');
  }

  decrement(){
    this.count = this.count - 1;
    if (this.count < 1) {
      this.count = 1;      
    }
  }

  increment(){
    this.count = this.count + 1;
  }

}

