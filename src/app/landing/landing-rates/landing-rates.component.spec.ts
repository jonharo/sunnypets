import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRatesComponent } from './landing-rates.component';

describe('LandingRatesComponent', () => {
  let component: LandingRatesComponent;
  let fixture: ComponentFixture<LandingRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
