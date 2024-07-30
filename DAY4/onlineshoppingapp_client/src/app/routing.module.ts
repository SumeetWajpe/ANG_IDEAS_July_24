import { NgModule } from "@angular/core";
import { ListofproductsComponent } from "./components/listofproducts/listofproducts.component";
import { PostsComponent } from "./components/posts/posts.component";
import { RouterModule, Routes } from "@angular/router";
import { PostDetails } from "./components/postdetails/postdetails.component";
import { ProductDetails } from "./components/product-details/product-details.component";
import { CartitemsComponent } from "./components/cart/cartitems/cartitems.component";
import { TemplatedrivennewproductComponent } from "./components/forms/templatedrivennewproduct/templatedrivennewproduct.component";
import { ModeldrivennewproductComponent } from "./components/forms/modeldrivennewproduct/modeldrivennewproduct.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

// const routes: Routes = [
//   {
//     path: "",
//     component: ListofproductsComponent,
//   },
//   {
//     path: "productdetails/:id",
//     component: ProductDetails,
//   },
//   {
//     path: "newproduct",
//     component: ModeldrivennewproductComponent,
//   },
//   {
//     path: "cart",
//     component: CartitemsComponent,
//   },
//   {
//     path: "posts",
//     component: PostsComponent,
//   },
//   {
//     path: "postdetails/:id",
//     component: PostDetails,
//   },
// ];

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: ListofproductsComponent,
      },
      {
        path: "productdetails/:id",
        component: ProductDetails,
      },
      {
        path: "newproduct",
        component: ModeldrivennewproductComponent,
      },
      {
        path: "cart",
        component: CartitemsComponent,
      },
      {
        path: "posts",
        component: PostsComponent,
      },
      {
        path: "postdetails/:id",
        component: PostDetails,
      },
    ],
  },
  { path: "**", redirectTo: "/dashboard" },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
