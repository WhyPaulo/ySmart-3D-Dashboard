import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagSessionsComponent } from './pag-sessions.component';

describe('PagSessionsComponent', () => {
  let component: PagSessionsComponent;
  let fixture: ComponentFixture<PagSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
