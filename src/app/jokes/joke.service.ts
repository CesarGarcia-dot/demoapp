import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, shareReplay, Subject, switchMap, takeUntil, timer } from "rxjs";


//interface for model JOKE
export interface Joke {
  id: number;
  joke: string;
  categories: Array<string>;
}

//const variables to use in service
const API_ENDPOINT = 'https://api.icndb.com/jokes/random/5?limitTo=[nerdy]';
//milliseconds
const REFRESH_INTERVAL = 10000;
const CACHE_SIZE = 1;

//interface for cache with type and value
export interface JokeResponse {
  type: string;
  value: Array<Joke>;
}

//servicie
@Injectable()
export class JokeService {
  //variables rxjs
  private cache$: Observable<Array<Joke>> | undefined | null;
  private reload$ = new Subject<void>();

  //constructor
  constructor(private http: HttpClient) { }

  // This method is responsible for fetching the data.
  // The first one who calls this function will initiate
  // the process of fetching data.

  get jokes(): Observable<Joke[]>{
    if (!this.cache$) {
      // Set up timer that ticks every X milliseconds
      const timer$ = timer(0, REFRESH_INTERVAL);

      // For each timer tick make an http request to fetch new data
      // We use shareReplay(X) to multicast the cache so that all
      // subscribers share one underlying source and don't re-create
      // the source over and over again. We use takeUntil to complete
      // this stream when the user forces an update.

      this.cache$ = timer$.pipe(
        // Projects each source value to an Observable which is merged in
        // the output Observable, emitting values only from the most recently projected Observable
        switchMap(() => this.requestJokes()),
        //Emits the values emitted by the source Observable until a notifier Observable emits a value.
        takeUntil(this.reload$),
        // Share source and replay specified number of emissions on subscription.
        shareReplay(CACHE_SIZE)
      );

    }

    return this.cache$;
  }

  // Public facing API to force the cache to reload the data
  forceReload() {
    this.reload$.next();
    this.cache$ = null;
  }

  // Helper method to actually fetch the jokes
  private requestJokes() {
    return this.http.get<JokeResponse>(API_ENDPOINT).pipe(
      map(response => response.value)
    );
  }



}
