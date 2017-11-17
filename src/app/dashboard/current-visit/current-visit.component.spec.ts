import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentVisitComponent } from './current-visit.component';

describe('CurrentVisitComponent', () => {
  let component: CurrentVisitComponent;
  let fixture: ComponentFixture<CurrentVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
