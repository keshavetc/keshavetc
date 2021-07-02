import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent_ } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent_;
  let fixture: ComponentFixture<HomeComponent_>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent_ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent_);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
