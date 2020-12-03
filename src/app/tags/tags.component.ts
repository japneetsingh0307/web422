import { Component, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: Array<string>;

  private tag;

  constructor(private data: PostServiceService) { }

  ngOnInit(): void {
    this.tag = this.data.getTags().subscribe(data => this.tags = data);
  }

}
