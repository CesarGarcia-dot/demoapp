import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { HelloService, Post } from './hello.service';

@Component({
  selector: 'app-hello-promises',
  templateUrl: './hello-promises.component.html',
  styleUrls: ['./hello-promises.component.scss']
})
export class HelloPromisesComponent implements OnInit {
  data: Post[];
  constructor(
    private helloService: HelloService
  ) {
  //  this.helloService.getPosts().then((res: any) => {
  //      this.data = res.map((res: any) => {
  //       return new Post(
  //         res.userId,
  //         res.id,
  //         res.title,
  //         res.body
  //       );
  //      });
  //    }
  //    );

    // As of RxJS v8, toPromise will be removed. Instead, the above can be replaced with await firstValueFrom(observable)

    // this.helloService.getPostRxj7().then(
    //   (res: any) => {
    //     this.data = res.map((res: any) => {
    //       return new Post(
    //         res.userId,
    //         res.id,
    //         res.title,
    //         res.body
    //       );
    //     });
    //   },
    // ).catch((reason) =>
    //   console.log("Promises first value error: " + JSON.stringify(reason))
    // ).finally(
    //   () => console.log("Promises firts value end")
    // );

    //lastValueFrom
    // Converts an observable to a promise by 
    // subscribing to the observable, waiting for it to complete, 
    // and resolving the returned promise with the last value from the observed stream.
    this.getPostLastValueFrom();
  }

  ngOnInit(): void {
  }

  async getPostLastValueFrom() {

    this.helloService.loadPostsLastValueFrom().then((res: any) => {
      this.data = res.map((res: any) => {
        return new Post(
          res.userId,
          res.id,
          res.title,
          res.body
        );
      }
      );
    }).catch((reason) =>
      console.log("Promises last value  error: " + JSON.stringify(reason))
    ).finally(
      () => console.log("Promises last value end")
    );
  }

}
