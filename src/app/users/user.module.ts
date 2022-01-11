import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgMaterialModule } from "../ng-material/ng-material.module";
import { UserListComponent } from './user-list/user-list.component';
import { UserRoutingModule } from "./user-routing.module";
import { UserService } from "./user.service";
import { CommonModule } from '@angular/common';
import { HelloPromisesComponent } from './hello-promises/hello-promises.component';
import { HelloService } from "./hello-promises/hello.service";

@NgModule({
  declarations: [
    UserListComponent,
    HelloPromisesComponent
  ],
  imports: [
    NgMaterialModule,
    HttpClientModule,
    CommonModule,
    UserRoutingModule
  ],
  providers: [
    UserService,
    HelloService
  ]
})

export class UserModule { }