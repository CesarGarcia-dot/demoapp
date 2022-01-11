import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { catchError, count, EMPTY, interval, map, merge, Observable, startWith, switchMap, tap } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

const RESULTS = 200;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements AfterViewInit {



  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];


  @ViewChild(MatPaginator) paginator: MatPaginator;

  users$: Observable<User[]>;
  count: number;


  constructor(private userService: UserService) {
  }


  ngAfterViewInit(): void {
    this.loadData();
   
  }

  loadData() {
    this.isLoading = true;

    this.users$ = this.userService.users$(this.currentPage, this.pageSize);
    this.paginator.pageIndex = this.currentPage;
    this.users$.subscribe((x) => {
      this.paginator.length = x.length;
      this.isLoading = false;
    })
  }


  pageChanged(event: PageEvent) {
    console.log({ event });
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadData();
  }


}
