import { Injectable } from '@angular/core';
import { PostModel } from '../models/posts.model';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService {
  posts: PostModel[] = [];
  constructor(public httpCLientObj: HttpClient) {}
  getAllPosts() {
    // make AJAX request here !
    return this.httpCLientObj.get(
      'https://jsonplaceholder.typicode.com/posts'
    );

    
  }
}
