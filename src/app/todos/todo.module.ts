import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { ItemTodoComponent } from './todo-list/item-todo/item-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoService } from './todo.service';
import { ProfileComponent } from './todo-list/profile/profile.component';
import { ProfileResolver } from './profile.resolver';

@NgModule({
  declarations: [
    TodoListComponent,
    ItemTodoComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgMaterialModule,
    TodoRoutingModule
  ],
  providers: [
    TodoService,
    ProfileResolver
  ],
})
export class TodoModule { }