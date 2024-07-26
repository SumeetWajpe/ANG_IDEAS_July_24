import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductModel } from "src/app/models/product.model";
import { ProductService } from "src/app/services/products.service";

@Component({
  selector: "app-product-details",

  templateUrl: "./product-details.component.html",
})
export class ProductDetails {
  theProduct: ProductModel = new ProductModel();
  constructor(
    public prdSrvObject: ProductService,
    public route: ActivatedRoute,
  ) {}

  ngOnInit() {
    if (this.prdSrvObject.listofproducts.length) {
      // call the getAllProductById()
      // OR
      // programtic navigate to ListOfProducts component

      // this.route.params.subscribe((r: any) => {
    //   const id = r.id; // converts string to number
    //   console.log(id);
    //   console.log(this.prdSrvObject.listofproducts);
    //   this.theProduct =
    //     this.prdSrvObject.listofproducts.find(p => p.id == id) ||
    //     new ProductModel();
    // });
    }

    this.route.params.subscribe((r: any) => {
      const id = r.id; // converts string to number
      console.log(id);
      console.log(this.prdSrvObject.listofproducts);
      this.theProduct =
        this.prdSrvObject.listofproducts.find(p => p.id == id) ||
        new ProductModel();
    });
  }
}
