import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../../post";
import { TodoService } from "../../todo.service";
import { Comment } from "../../comment";

@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html'
})
export class ItemTodoComponent implements OnInit {

  @Input('post') post: Post = Object.assign({});
  comments: Comment[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getCommentsByPostId();
  }

  getCommentsByPostId() {
    this.todoService.getCommentsByPostId(this.post.id).subscribe({
      next: (resp) => this.comments = resp,
      error: (error) => console.log(error)
    })
  }

}
