import { HttpHandler, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { NgMaterialModule } from 'src/app/ng-material/ng-material.module';

import { HelloPromisesComponent } from './hello-promises.component';
import { HelloService } from './hello.service';

describe('HelloPromisesComponent', () => {
  let component: HelloPromisesComponent;
  let fixture: ComponentFixture<HelloPromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgMaterialModule,
      ],
      declarations: [ HelloPromisesComponent ],
      providers: [
        HttpHandler,
        HttpClient,
        HelloService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
