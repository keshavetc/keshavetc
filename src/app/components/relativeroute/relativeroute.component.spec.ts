import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativerouteComponent } from './relativeroute.component';

describe('RelativerouteComponent', () => {
  let component: RelativerouteComponent;
  let fixture: ComponentFixture<RelativerouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativerouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativerouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
