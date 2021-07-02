import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChilrenComponent } from './home-chilren.component';

describe('HomeChilrenComponent', () => {
  let component: HomeChilrenComponent;
  let fixture: ComponentFixture<HomeChilrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChilrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChilrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
