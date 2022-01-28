import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileResolver } from './profile.resolver';
import { ProfileComponent } from './todo-list/profile/profile.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  {
    path: 'todo', component: TodoListComponent
  },
  { path: 'detail/:id', component: ProfileComponent, resolve: { profile: ProfileResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
