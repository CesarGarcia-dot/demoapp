import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, flush, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../user.service';
import { UserListComponent } from './user-list.component';
//angular material
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginatorHarness } from '@angular/material/paginator/testing';
import { defer, of } from 'rxjs';



describe('UserListComponent', () => {

  let fixture: ComponentFixture<UserListComponent>;
  let mockUserService: any;
  let loader: HarnessLoader;
  let instance: UserListComponent;
  let USERS: any;

  beforeEach(() => {
    USERS = [
      { id: 1, name: 'SpiderDude', location: 'El Salvador', picture: 'roto' },
      { id: 2, name: 'Wonderful Woman', location: 'El Salvador', picture: 'roto' },
      { id: 3, name: 'SuperDude', location: 'El Salvador', picture: 'roto' },
    ];
  })



  beforeEach(async () => {
    mockUserService = jasmine.createSpyObj(['users$']);

    await TestBed.configureTestingModule({
      imports: [
        NgMaterialModule,
        MatPaginatorModule,
        NoopAnimationsModule,
      ],
      declarations: [UserListComponent],
      providers: [
        { provide: UserService, useValue: mockUserService }
      ],
      //schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    fixture = TestBed.createComponent(UserListComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    instance = fixture.componentInstance;

  });

  it('should be create', async () => {
    tick();
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });


  it('should be called service from UserService', async () => {
    mockUserService.users$.and.returnValue(of(USERS));
    tick();
    fixture.detectChanges();
    expect(mockUserService.users$).toHaveBeenCalled();
  });


});
