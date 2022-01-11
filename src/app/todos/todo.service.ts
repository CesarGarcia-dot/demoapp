import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post } from './post';
import { Profile } from './profile';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl + "comments");
  }



  getCommentsByPostId(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.apiUrl + "comments?postId=" + id);
  }

  getComment(id: number): Observable<Comment> {
    return this.http.get<Comment>(this.apiUrl + "comments/" + id);
  }

  addComment(comment: Comment) {
    return this.http.post(this.apiUrl + "comments/", comment);
  }

  deleteComment(id: number) {
    return this.http.delete(this.apiUrl + "comments/" + id);
  }


  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl + "posts");
  }

  getPostsByTitle(title: string): Observable<Post[]> {
    if (title === '') {
      return this.http.get<Post[]>(this.apiUrl + "posts");
    }
    return this.http.get<Post[]>(this.apiUrl + "posts?title=" + title);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.apiUrl + "posts/" + id);
  }

  addPost(post: Post) {
    return this.http.post(this.apiUrl + "posts/", post);
  }

  deletePost(id: number) {
    return this.http.delete(this.apiUrl + "posts/" + id);
  }

  getProfile(id: number): Observable<Profile> {
    return this.http.get<Profile>(this.apiUrl + "profiles/" + id);
  }


}
