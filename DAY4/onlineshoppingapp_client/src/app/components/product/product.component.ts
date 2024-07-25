import { Component, Input } from "@angular/core";
import { ProductModel } from "src/app/models/product.model";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent {
  isAddedToCart: boolean = false;
  @Input() productdetails: ProductModel = new ProductModel(
    0,
    "",
    0,
    0,
    0,
    "",
    "",
  );

  ChangeLikes() {
    // mutate
    this.productdetails.likes++;
  }
}
