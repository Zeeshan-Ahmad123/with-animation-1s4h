import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSearchListComponent } from './client-search-list.component';

describe('ClientSearchListComponent', () => {
  let component: ClientSearchListComponent;
  let fixture: ComponentFixture<ClientSearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
