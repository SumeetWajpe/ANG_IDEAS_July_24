import { Component, OnInit } from "@angular/core";
import { PostModel } from "src/app/models/posts.model";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"],
  providers: [PostsService],
})
export class PostsComponent implements OnInit {
  posts: PostModel[] = [];
  constructor(public postSrvObj: PostsService) {}

  async ngOnInit() {
    // console.log(this.postSrvObj.posts.length);
    // using Subscribe (Observables)
    // const response = this.postSrvObj.getAllPosts();
    // response.subscribe((posts: any) => (this.posts = posts));
    // using Promise
    // const aPromise = this.postSrvObj.getAllPosts();
    // aPromise.then((posts: any) => (this.posts = posts));

    try {
      // using promises with async await
      this.posts = await this.postSrvObj.getAllPosts();
    } catch (error) {
      console.log(error);
    }
  }
}
