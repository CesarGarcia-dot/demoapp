

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokeListComponent } from './joke-list.component';

const routes: Routes = [
  { path: '', component: JokeListComponent },
  {
    path: 'jokes', component: JokeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JokeRoutingModule { }