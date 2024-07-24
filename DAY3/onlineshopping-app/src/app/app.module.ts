import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListofproductsComponent } from './components/listofproducts/listofproducts.component';
import { ProductComponent } from './components/product/product.component';
import { IconComponent } from './components/atoms/icon/icon.component';
import { RatingComponent } from './components/molecules/rating/rating.component';

@NgModule({
  declarations: [AppComponent, ListofproductsComponent, ProductComponent, IconComponent, RatingComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
