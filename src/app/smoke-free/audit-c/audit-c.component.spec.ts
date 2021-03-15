import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditCComponent } from './audit-c.component';

describe('AuditCComponent', () => {
  let component: AuditCComponent;
  let fixture: ComponentFixture<AuditCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
