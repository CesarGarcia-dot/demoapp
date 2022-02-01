import { ComponentFixture, fakeAsync, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NgMaterialModule } from './ng-material/ng-material.module';

//angular material
import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {

  //Arrange
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;
  let buttonHarness = MatButtonHarness;

  let titleButtons = [
    "1 Users",
    "2 Posts",
    "3 Jokes",
    "Hello Promises"
  ]

  let fakeRoutesPathValue = [
    '/users',
    '/todo',
    '/jokes',
    '/users/hello',
  ]


  //Act
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgMaterialModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    //declaration del component para crearlo fake
    fixture = TestBed.createComponent(AppComponent);
    //ngOnInit()
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });
  //Assert

  it('should create the app component', () => {
    //Arrange
    const fixture = TestBed.createComponent(AppComponent);
    //Act
    const app = fixture.componentInstance;
    //Assert
    expect(app).toBeTruthy();
  });

  it(`should have as title 'demoangular'`, () => {
    //Arrange
    const fixture = TestBed.createComponent(AppComponent);
    //Act
    const app = fixture.componentInstance;
    //Assert
    expect(app.title).toEqual('demoangular');
  });


  it('should load all button harnesses', async () => {
    //Arrange
    const buttons = await loader.getAllHarnesses(MatButtonHarness);
    //Act
    //Assert
    expect(buttons.length).toBe(4);
  });

  it('should load button with exact text', async () => {
    //Arrange
    const buttons = await loader.getAllHarnesses(buttonHarness);
    //Act
    for (let i = 0; i < buttons.length; i++) {
      //Assert
      expect(await buttons[i].getText()).toBe(titleButtons[i]);
    }
  });

  it('should go to URL', fakeAsync(inject([Router, Location], (router: Router, location: Location) => {
    //Arrange

    let navButtons = fixture.debugElement.queryAll(By.css('a'));
    //Act
    for(let i = 0; i < navButtons.length; i++)
    {
      //Assert
      // console.log(fakeRoutesPathValue[i]);
      navButtons[i].triggerEventHandler('click', null);
      expect(navButtons[i].nativeElement.attributes.href.value).toBe(fakeRoutesPathValue[i]);
    }
  })
  ));



});
