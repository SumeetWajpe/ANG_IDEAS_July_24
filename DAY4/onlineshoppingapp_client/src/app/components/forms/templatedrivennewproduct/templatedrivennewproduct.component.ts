import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ProductModel } from "src/app/models/product.model";

@Component({
  selector: "app-templatedrivennewproduct",
  templateUrl: "./templatedrivennewproduct.component.html",
  styleUrls: ["./templatedrivennewproduct.component.css"],
})
export class TemplatedrivennewproductComponent {
  newProduct: ProductModel = new ProductModel();

  constructor(public router: Router) {}

  HandleFormSubmit(f: any) {
    console.log(this.newProduct);
    // add new product to the collection from service
    // this.router.navigate(["/"]);
    f.reset();
  }
}
