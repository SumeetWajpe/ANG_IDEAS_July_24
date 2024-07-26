import { Component } from "@angular/core";
import { CartService } from "src/app/services/cartservice";

@Component({
  selector: "app-cartitems",
  templateUrl: "./cartitems.component.html",
  styleUrls: ["./cartitems.component.css"],
})
export class CartitemsComponent {
  constructor(public cartSrvObject: CartService) {}

  ngOnInit() {}
}
