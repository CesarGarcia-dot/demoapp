import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'jokes', loadChildren: () => import('./jokes/joke.module').then(m => m.JokeModule) },
  { path: 'todo', loadChildren: () => import('./todos/todo.module').then(m => m.TodoModule) },
  { path: 'users', loadChildren: () => import('./users/user.module').then(m => m.UserModule) },
  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
