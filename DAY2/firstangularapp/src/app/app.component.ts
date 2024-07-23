import { Component } from '@angular/core';
import { MessageModel } from 'src/models/message.model';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'firstangularapp';
  messages: MessageModel[] = [
    {
      msg: 'Hola',
      from: 'Joe',
      to: 'John',
      imageurl:
        'https://t4.ftcdn.net/jpg/04/30/55/11/360_F_430551145_pE3FZqhabVLPU3QJ1UHb7L2R5zGowYdc.jpg',
    },
    {
      msg: 'Hey',
      from: 'Parker',
      to: 'John',
      imageurl:
        'https://t4.ftcdn.net/jpg/04/30/55/11/360_F_430551145_pE3FZqhabVLPU3QJ1UHb7L2R5zGowYdc.jpg',
    },
    {
      msg: 'Bye',
      from: 'Peter',
      to: 'John',
      imageurl:
        'https://t4.ftcdn.net/jpg/04/30/55/11/360_F_430551145_pE3FZqhabVLPU3QJ1UHb7L2R5zGowYdc.jpg',
    },
  ];
}
