import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/services/cartservice";

@Component({
  selector: "app-cart-count",
  templateUrl: "./cartcount.component.html",
})
export class CartCountComponent implements OnInit {
  constructor(public currCartServObj: CartService) {}

  ngOnInit() {}
}
