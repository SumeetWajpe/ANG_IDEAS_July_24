import { Component, OnInit } from "@angular/core";
import { ProductModel } from "src/app/models/product.model";
import { ProductService } from "src/app/services/products.service";

@Component({
  selector: "app-listofproducts",
  templateUrl: "./listofproducts.component.html",
  styleUrls: ["./listofproducts.component.css"],
  providers: [ProductService],
})
export class ListofproductsComponent implements OnInit {
  products: ProductModel[] = [];

  constructor(public prodsrvInstance: ProductService) {}

  async ngOnInit() {
    try {
      this.products = await this.prodsrvInstance.getAllProducts();
    } catch (error) {
      console.log(error);
    }
  }
}
