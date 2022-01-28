import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { ProfileResolver } from '../../profile.resolver';
import { TodoService } from '../../todo.service';
import { ActivatedRouteStub } from './activated-route-stub';

import { ProfileComponent } from './profile.component';

//routes

import { routes } from '../../todo-routing.module';
import { of } from 'rxjs';



describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let activatedRouteSpy;
  let activatedRoute: ActivatedRouteStub;
  let todoService: TodoService;
  let resolve: ProfileResolver;
  let router: Router;

  let mockSomeService = {
    getData: () => {}
  }

  beforeEach(() => {




    // activatedRouteSpy = {
    //   snapshot: {
    //     paramMap: convertToParamMap({
    //       id: 1,
    //       name: 'typicode'
    //     })
    //   }
    // };
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgMaterialModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [ProfileComponent],
      providers: [
        { provide: TodoService, useValue: mockSomeService },
        ProfileResolver,
        {
          provide: ActivatedRoute,
          useValue: of(convertToParamMap({id: 1}))
         },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
    fixture =  TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    resolve = TestBed.inject(ProfileResolver);



    router.initialNavigation()

    // fixture.detectChanges();
  });

  // it('It had created succesfully the service TODOSERVICE', () => {
  //   fixture.detectChanges();
  //   expect(todoService).toBeTruthy();
  // });


  // it('It had created succesfully the resolve PROFILE RESOLVE', () => {
  //   expect(resolve).toBeTruthy();
  // });

  it('should create', () => {
    spyOn(mockSomeService, 'getData').and.returnValue({ subscribe: () => {} })
    // activatedRoute = new ActivatedRouteStub();
    // activatedRoute.setParamMap({id:1});
    // fixture =  TestBed.createComponent(ProfileComponent);
    expect(mockSomeService.getData).toHaveBeenCalled();
  });
});
