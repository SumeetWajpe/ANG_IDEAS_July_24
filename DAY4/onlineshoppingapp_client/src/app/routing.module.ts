import { NgModule } from "@angular/core";
import { ListofproductsComponent } from "./components/listofproducts/listofproducts.component";
import { PostsComponent } from "./components/posts/posts.component";
import { RouterModule, Routes } from "@angular/router";
import { PostDetails } from "./components/postdetails/postdetails.component";

const routes: Routes = [
  {
    path: "",
    component: ListofproductsComponent,
  },
  {
    path: "posts",
    component: PostsComponent,
  },
  {
    path: "postdetails/:id",
    component: PostDetails,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
