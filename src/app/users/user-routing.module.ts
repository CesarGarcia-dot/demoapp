import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloPromisesComponent } from './hello-promises/hello-promises.component';
import { UserListComponent } from './user-list/user-list.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserListComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'hello',
    component: HelloPromisesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }