import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Message } from '../components/message/message.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, Message],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
