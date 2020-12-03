import { Component, OnInit, Input} from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-latest-posts',
  templateUrl: './latest-posts.component.html',
  styleUrls: ['./latest-posts.component.css']
})
export class LatestPostsComponent implements OnInit {

  constructor(private data: PostServiceService) { }

  blogPosts: Array<BlogPost>;

  private posts;

  ngOnInit(): void {
    this.posts = this.data.getPosts(1, null, null).subscribe(data => this.blogPosts = data.slice(0,3));
  }

}
