import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoAlertBarComponent } from './promo-alert-bar.component';

describe('PromoAlertBarComponent', () => {
  let component: PromoAlertBarComponent;
  let fixture: ComponentFixture<PromoAlertBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoAlertBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoAlertBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
