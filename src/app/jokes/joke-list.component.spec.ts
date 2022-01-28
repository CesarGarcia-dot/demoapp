import { HttpClient, HttpHandler } from '@angular/common/http';
import { DebugElement, Injector } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { map, Observable, of } from 'rxjs';
import { NgMaterialModule } from '../ng-material/ng-material.module';

import { JokeListComponent } from './joke-list.component';
import { JokeService , Joke} from './joke.service';

describe('JokeListComponent', () => {
  let component: JokeListComponent;
  let fixture: ComponentFixture<JokeListComponent>;
  let debug: DebugElement;
  // const jokeService = TestBed.inject(JokeService);

  //wait for component to load in declaration module
  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [
        NgMaterialModule,
      ],
      declarations: [JokeListComponent],
      providers: [
        Injector,
        HttpHandler,
        HttpClient,
        JokeService
      ]
    })
      .compileComponents(); //compiles template and css
  });

  //wait for component to load in page
  beforeEach(() => {
    fixture = TestBed.createComponent(JokeListComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  //expect to create successfully
  it('should create', () => {
     expect(component).toBeTruthy();
  });


  it('should have a message with `notifications`', () => {
    // expect(jokeService.jokes.pipe(map(x => x))).toHaveBeenCalled();
  })


})


