import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Post } from '../post';
import { Profile } from '../profile';
import { TodoService } from '../todo.service';
import { Comment } from '../comment';
import { debounceTime, distinct, distinctUntilChanged, filter, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  comments: Comment[] = [];
  posts: Post[] = [];
  profile: Profile = Object.assign({});
  panelOpenState = false;

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;


  @ViewChild('postSearchInput', { static: true }) postSearchInput!: ElementRef;
  page = 1;
  pageSize = 2;

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.getPosts();
    //trigger event from html
    fromEvent(this.postSearchInput.nativeElement, 'keyup').pipe(
      // get value
      map((event: any) => {
        return event.target.value;
      }),
      // if character length greater then 2
      filter(res => res.length > 2),
      // Time in milliseconds between key events
      debounceTime(1000),
      // If previous query is diffent from current 
      distinctUntilChanged()
      // subscription for response
    ).subscribe((text: string) => {
      //service called
      this.todoService.getPostsByTitle(text.trim()).subscribe({
        next: (resp) => {
          if (resp.length > 0)
            this.posts = resp;
          else
            this.getPosts();
        },
        error: (err) => console.log(err)
      })
    })
  }


  getPosts() {
    this.todoService.getPosts().subscribe({
      next: (resp) => this.posts = resp,
      error: (err) => console.log(err),
      complete: () => console.warn
    });
  }








}
