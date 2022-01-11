import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { NgMaterialModule } from "../ng-material/ng-material.module";
import { JokeListComponent } from "./joke-list.component";
import { JokeRoutingModule } from "./joke-routing.module";
import { JokeService } from "./joke.service";

@NgModule({
  declarations: [
    JokeListComponent
  ],
  imports: [
    CommonModule,
    NgMaterialModule,
    HttpClientModule,
    JokeRoutingModule
  ],
  providers: [
    JokeService
  ]
})

export class JokeModule { }