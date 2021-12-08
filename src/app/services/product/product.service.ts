import { HttpClient } from '@angular/common/http';
// import { Product } from './../../models/product'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public baseApi = "http://localhost:3000/products"

  constructor( private _http : HttpClient) { }

  getAll(): Observable<any> {
    return this._http.get(this.baseApi)
  }

  find(id : number):Observable<any> {
    return this._http.get(this.baseApi + '/' + id)
  }


}
