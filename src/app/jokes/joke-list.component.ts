import { Component, OnInit } from '@angular/core';
import { Memoize } from 'lodash-decorators';
import { mapTo, merge, mergeMap, Observable, skip, Subject, switchMap, take } from 'rxjs';
import { Joke, JokeService } from './joke.service';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.scss']
})
export class JokeListComponent implements OnInit {

  jokes$: Observable<Array<Joke>>;
  showNotification$: Observable<boolean>;
  // A Subject is a special type of Observable that allows values 
  // to be multicasted to many Observers. Subjects are like EventEmitters.
  update$ = new Subject<void>();
  forceReload$ = new Subject<void>();

  constructor(private jokeService: JokeService) { 

  }

  ngOnInit(): void {
    const initialJokes$ = this.getDataOnce();

    const updates$ = merge(this.update$, this.forceReload$).pipe(
      mergeMap(() => this.getDataOnce())
    );
    this.jokes$ = merge(initialJokes$, updates$);

    const reload$ = this.forceReload$.pipe(mergeMap(() => this.getNotifications()));
    const initialNotifications$ = this.getNotifications();
    const show$ = merge(initialNotifications$, reload$).pipe(mapTo(true));
    //Emits the given constant value on the output Observable every time the source Observable emits a value.
    //example: input a- b - c, using mapTo(a)  output: a - a - a
    const hide$ = this.update$.pipe(mapTo(false));

    this.showNotification$ = merge(show$, hide$);

  }

  getDataOnce() {
    //Emits only the first count values emitted by the source Observable.
    return this.jokeService.jokes.pipe(take(1));
  }

  getNotifications() {
    //Returns an Observable that skips the first count items emitted by the source Observable.
    return this.jokeService.jokes.pipe(skip(1));
  }

  forceReload() {
    this.jokeService.forceReload();
    this.forceReload$.next();
  }

  changeStatus() {
    this.update$.next()
  }

 
  // You can call memoized methods within the same class, too. 
  // This could be useful if you want to memoize the return value 
  // for an entire data set, and also a filtered or mapped version of that same set
  @Memoize()
  getVotes(id: number) {
    return Math.floor(10 + Math.random() * (100 - 10));
  }


}



// Observable: represents the idea of an invokable collection of future values or events.
// Observer: is a collection of callbacks that knows how to listen to values delivered by the Observable.
// Subscription: represents the execution of an Observable, is primarily useful for cancelling the execution.
// Operators: are pure functions that enable a functional programming style of dealing with collections 
// with operations like map, filter, concat, reduce, etc.
// Subject: is equivalent to an EventEmitter, and the only way of multicasting a value or event to multiple Observers.
// Schedulers: are centralized dispatchers to control concurrency, 
// allowing us to coordinate when computation happens on e.g. setTimeout or requestAnimationFrame or others.