import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPromoComponent } from './landing-promo.component';

describe('LandingPromoComponent', () => {
  let component: LandingPromoComponent;
  let fixture: ComponentFixture<LandingPromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
