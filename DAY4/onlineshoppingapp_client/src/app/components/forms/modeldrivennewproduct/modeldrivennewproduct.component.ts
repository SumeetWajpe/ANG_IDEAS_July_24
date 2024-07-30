import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ProductModel } from "src/app/models/product.model";
import { restrictProductTitleValidator } from "./customValidations";

@Component({
  selector: "app-modeldrivennewproduct",
  templateUrl: "./modeldrivennewproduct.component.html",
  styleUrls: ["./modeldrivennewproduct.component.css"],
})
export class ModeldrivennewproductComponent {
  newProduct: ProductModel = new ProductModel();

  newProductForm: FormGroup = new FormGroup({
    id: new FormControl(this.newProduct.id),
    title: new FormControl(this.newProduct.title, [
      Validators.required,
      restrictProductTitleValidator(/Angular/i),
    ]),
    price: new FormControl(this.newProduct.price),
    likes: new FormControl(this.newProduct.likes),
    rating: new FormControl(this.newProduct.rating),
    imageUrl: new FormControl(this.newProduct.imageUrl),
    description: new FormControl(this.newProduct.description),
  });

  AddNewProduct() {
    // console.log(this.newProductForm.controls['title'].dirty );
    // this.newProductForm.controls["title"].value = "XYZ";
    console.log(this.newProductForm.value);
  }
}
