import { NgModule } from "@angular/core";
import { ListofproductsComponent } from "./components/listofproducts/listofproducts.component";
import { PostsComponent } from "./components/posts/posts.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ListofproductsComponent,
  },
  {
    path: "posts",
    component: PostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
