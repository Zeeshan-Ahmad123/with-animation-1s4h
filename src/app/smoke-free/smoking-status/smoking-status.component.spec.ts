import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokingStatusComponent } from './smoking-status.component';

describe('SmokingStatusComponent', () => {
  let component: SmokingStatusComponent;
  let fixture: ComponentFixture<SmokingStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokingStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
