import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, lastValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class HelloService {
  apiUrl = 'https://www.techiediaries.com/api/data.json';

  api: string = "https://jsonplaceholder.typicode.com/posts";
  data = [];

  constructor(private http: HttpClient) { }


  fetchData() {
    const promise = this.http.get(this.apiUrl).toPromise();
    console.log(promise);
    promise.then((data) => {
      console.log("Promise resolved with: " + JSON.stringify(data));
    },
      (error) => {
        console.log("Promise rejected with " + JSON.stringify(error));
      }
    )
  }

  getPosts() {
    // It converts basic observable to promise,
    //   we are getting the response and inserting inside
    //   the data array and then called the
    // resolve() method. 
    //   We also called the
    // reject() method, and it will get the error object when the request gets failed.
    const promise = new Promise((resolve, reject) => {
      const apiURL = this.api;
      this.http.get<Post[]>(apiURL)
        .toPromise()
        .then((res: any) => {
          //success
          resolve(res);
        },
          //error
          err => {
            reject(err);
          }
        );
    });
    return promise;
  }


  async getPostRxj7() {
    const apiURL = this.api;
    const request = this.http.get<Post[]>(apiURL);
    // Converts an observable to a promise by subscribing to the observable, 
    // and returning a promise that will resolve as soon as the first value arrives 
    // from the observable. The subscription will then be closed.
    const firstValue = await firstValueFrom(request);
    return firstValue;
  }

  async loadPostsLastValueFrom() : Promise<Post[]> {
    const request = this.http.get<Post[]>(this.api);
    const lastValue = lastValueFrom(request);
    return lastValue;
  }

  // WARNING: Only use this with observables you know will emit at 
  // least one value, OR complete. If the source observable does not 
  // emit one value or complete, you will end up with a promise that is hung up, 
  // and potentially all of the state of an 
  // async function hanging out in memory. 
  // To avoid this situation, look into adding something like 
  // timeout, take, takeWhile, or takeUntil amongst others.

}



export class Post {
  constructor(
    public userId: number,
    public id: string,
    public title: string,
    public body: string
  ) { }
}