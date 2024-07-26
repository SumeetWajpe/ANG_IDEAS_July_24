import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post-details",
  templateUrl: "./postdetails.component.html",
})
export class PostDetails implements OnInit {
  constructor(public route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((r: any) => console.log(r.id));
  }
}
