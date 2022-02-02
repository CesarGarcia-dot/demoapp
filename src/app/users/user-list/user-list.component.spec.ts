import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from '../user.service';
import { UserListComponent } from './user-list.component';
//angular material
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatPaginatorHarness } from '@angular/material/paginator/testing';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';



describe('UserListComponent', () => {

  let fixture: ComponentFixture<UserListComponent>;
  let mockUserService: UserService;
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
    // Create fake
    mockUserService = jasmine.createSpyObj<UserService>(
      'UserService',
      {
        users$: of(USERS)
      }
    );

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        NgMaterialModule,
      ],
      declarations: [UserListComponent],
      providers: [
        { provide: UserService, useValue: mockUserService }
      ],
      // schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    fixture = TestBed.createComponent(UserListComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    // instance = fixture.componentInstance;
  });

  it('should be create', async () => {
    expect(fixture.componentInstance).toBeTruthy();
  });


  it('should be called service from UserService list', async () => {
    //arrange
    mockUserService.users$(1, 10).subscribe(resp => {
      //assert
      expect(resp).toEqual(USERS);
    })
  });

  it('should load all paginator harnesses', async () => {
    //arrange
    fixture.changeDetectorRef.detectChanges();
    loader.getAllHarnesses(MatPaginatorHarness);
    //act
    const paginators = await loader.getAllHarnesses(MatPaginatorHarness);
    mockUserService.users$(1, 10).subscribe(async resp => {
      paginators.length = resp.length;
    })
    //assert
    expect(paginators.length).toBe(3);
  });


});
