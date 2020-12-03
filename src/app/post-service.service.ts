import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {BlogPost} from './BlogPost';

let perPage = 6;

@Injectable({
  providedIn: 'root'
})

export class PostServiceService {

  constructor(private http: HttpClient) { }

  getPosts(page, tag, category): Observable<BlogPost[]> {
    let params = {
      page: page,
      perPage: perPage.toString(),
    }

    if(tag != null || tag != undefined){
      tag = tag;
    }

    if(category != null || category != undefined){
      category = category;
    }

    return this.http.get<BlogPost[]>(`https://web422a5api.herokuapp.com/api/posts`,{params});
  }

  getPostByID(id): Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://web422a5api.herokuapp.com/api/posts/${id}`)
  }

  getCategories(): Observable<any>{
    return this.http.get<any>(`https://web422a5api.herokuapp.com/api/categories`)
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(`https://web422a5api.herokuapp.com/api/tags`);
  }

}
