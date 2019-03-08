import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBalanceComponent } from './event-balance.component';

describe('EventBalanceComponent', () => {
  let component: EventBalanceComponent;
  let fixture: ComponentFixture<EventBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
