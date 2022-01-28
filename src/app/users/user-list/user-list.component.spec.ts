import { HttpHandler, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';
import { ProfileResolver } from 'src/app/todos/profile.resolver';
import { UserService } from '../user.service';

import { UserListComponent } from './user-list.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        NgMaterialModule,
        BrowserAnimationsModule
      ],
      declarations: [ UserListComponent ],
      providers: [
        HttpHandler,
        HttpClient,
        UserService,
        ProfileResolver
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
