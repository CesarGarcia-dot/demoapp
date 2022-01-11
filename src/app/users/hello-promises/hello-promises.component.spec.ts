import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloPromisesComponent } from './hello-promises.component';

describe('HelloPromisesComponent', () => {
  let component: HelloPromisesComponent;
  let fixture: ComponentFixture<HelloPromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloPromisesComponent ]
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
