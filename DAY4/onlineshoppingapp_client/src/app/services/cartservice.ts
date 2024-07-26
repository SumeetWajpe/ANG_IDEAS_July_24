import { ProductModel } from "../models/product.model";

export class CartService {
  currentItems: ProductModel[] = [];

  addItemToCart(newProduct: ProductModel) {
    this.currentItems.push(newProduct);
    console.log(this.currentItems);
  }
  removeItemFromCart(theId: number) {
    var index = this.currentItems.findIndex(i => i.id == theId);
    this.currentItems.splice(index, 1);
    //console.log(this.currentItems);
  }
}
