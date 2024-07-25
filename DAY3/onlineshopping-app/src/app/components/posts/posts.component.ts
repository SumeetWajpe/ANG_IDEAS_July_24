import { Component } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService],
})
export class PostsComponent {
  constructor(public postSrvObj: PostsService) {
    // console.log(this.postSrvObj.posts.length);
    this.postSrvObj.getAllPosts();
  }
}
