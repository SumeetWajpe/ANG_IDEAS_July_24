import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./components/app/app.component";
import { ListofproductsComponent } from "./components/listofproducts/listofproducts.component";
import { ProductComponent } from "./components/product/product.component";
import { IconComponent } from "./components/atoms/icon/icon.component";
import { RatingComponent } from "./components/molecules/rating/rating.component";
import { TwowaybindingComponent } from "./components/twowaybinding/twowaybinding.component";
import { FormsModule } from "@angular/forms";
import { PostsComponent } from "./components/posts/posts.component";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./routing.module";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { PostDetails } from "./components/postdetails/postdetails.component";

@NgModule({
  declarations: [
    AppComponent,
    ListofproductsComponent,
    ProductComponent,
    IconComponent,
    RatingComponent,
    TwowaybindingComponent,
    PostsComponent,
    NavBarComponent,
    PostDetails,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
