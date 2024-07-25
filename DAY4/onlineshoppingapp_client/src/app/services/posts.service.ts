import { Injectable } from "@angular/core";
import { PostModel } from "../models/posts.model";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostsService {
  posts: PostModel[] = [];
  constructor(public httpCLientObj: HttpClient) {}
  getAllPosts() {
    return new Promise((resolve, reject) => {
      // make AJAX request here !
      this.httpCLientObj
        .get("https://jsonplaceholder.typicode.com/posts")
        .subscribe((posts: any) => resolve(posts));
    });
  }
}
