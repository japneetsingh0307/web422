import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostServiceService } from '../post-service.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {
  
  post : BlogPost;

  private querySub: any;

  constructor(private data: PostServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params => {
      this.data.getPostByID(params['id']).subscribe(data => this.post = data);
    });
  }

  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }

}
