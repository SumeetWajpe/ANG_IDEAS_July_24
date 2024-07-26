import { Component, Input } from "@angular/core";
import { ProductModel } from "src/app/models/product.model";
import { CartService } from "src/app/services/cartservice";

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

  constructor(public cartSrvObject: CartService) {}

  ChangeLikes() {
    // mutate
    this.productdetails.likes++;
  }

  HandleChange(e: any) {
    if (e.target.checked) {
      this.cartSrvObject.addItemToCart(this.productdetails);
    }
  }
}
