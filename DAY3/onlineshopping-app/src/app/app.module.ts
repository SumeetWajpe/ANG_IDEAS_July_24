import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListofproductsComponent } from './components/listofproducts/listofproducts.component';
import { ProductComponent } from './components/product/product.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { RatingComponent } from './components/molecules/rating/rating.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { FormsModule } from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListofproductsComponent,
    ProductComponent,
    IconComponent,
    RatingComponent,
    TwowaybindingComponent,
    PostsComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
