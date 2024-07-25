import { HttpClient } from "@angular/common/http";
import { ProductModel } from "../models/product.model";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
  listofproducts: ProductModel[] = [];

  constructor(public httpCLientObj: HttpClient) {}
  getAllProducts(): Promise<ProductModel[]> {
    return new Promise((resolve, reject) => {
      // make AJAX request here !
      this.httpCLientObj
        .get<ProductModel[]>("http://localhost:3000/products")
        .subscribe((products: ProductModel[]) => resolve(products));
    });
  }
}
