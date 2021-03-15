import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignpostedComponent } from './signposted.component';

describe('SignpostedComponent', () => {
  let component: SignpostedComponent;
  let fixture: ComponentFixture<SignpostedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignpostedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignpostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
