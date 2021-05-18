import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KentComponent } from './kent.component';

describe('KentComponent', () => {
  let component: KentComponent;
  let fixture: ComponentFixture<KentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
