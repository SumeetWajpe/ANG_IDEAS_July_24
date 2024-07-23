import { Component, Input } from '@angular/core';
import { MessageModel } from 'src/models/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class Message {
  //   @Input() msg: string = 'Hola !';
  //   @Input() from: string = 'Unknown';
  //   @Input() to: string = 'Unknown';
  //   @Input() imageurl: string = '';

  @Input() messagedetails:MessageModel = { msg: 'Hola', from: 'Unknown', to: 'Unknown',imageurl:"" };
}
