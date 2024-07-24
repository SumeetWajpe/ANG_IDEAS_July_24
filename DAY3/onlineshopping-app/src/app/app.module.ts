import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListofproductsComponent } from './components/listofproducts/listofproducts.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [AppComponent, ListofproductsComponent, ProductComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
