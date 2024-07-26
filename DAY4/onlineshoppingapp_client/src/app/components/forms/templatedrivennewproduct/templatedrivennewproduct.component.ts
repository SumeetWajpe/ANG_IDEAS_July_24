import { Component } from "@angular/core";
import { ProductModel } from "src/app/models/product.model";

@Component({
  selector: "app-templatedrivennewproduct",
  templateUrl: "./templatedrivennewproduct.component.html",
  styleUrls: ["./templatedrivennewproduct.component.css"],
})
export class TemplatedrivennewproductComponent {
  newProduct: ProductModel = new ProductModel();

  HandleFormSubmit() {
    console.log(this.newProduct);
  }
}
