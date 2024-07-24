import { Component } from '@angular/core';
import { ProductModel } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-listofproducts',
  templateUrl: './listofproducts.component.html',
  styleUrls: ['./listofproducts.component.css'],
  providers: [ProductService],
})
export class ListofproductsComponent {
  products: ProductModel[] = [];

  constructor(public srvInstance: ProductService) {
    // console.log(srvInstance.listofproducts);
    this.products = this.srvInstance.listofproducts;
  }
}
