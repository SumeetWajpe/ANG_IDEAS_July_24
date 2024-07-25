import { Component } from "@angular/core";
import { PostModel } from "src/app/models/posts.model";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
  providers: [PostsService],
})
export class PostsComponent {
  posts: PostModel[] = [];
  constructor(public postSrvObj: PostsService) {
    // console.log(this.postSrvObj.posts.length);
    const response = this.postSrvObj.getAllPosts();
    response.subscribe((posts: any) => (this.posts = posts));
  }
}
