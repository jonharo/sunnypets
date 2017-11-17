import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImpressionComponent } from './header-impression.component';

describe('HeaderImpressionComponent', () => {
  let component: HeaderImpressionComponent;
  let fixture: ComponentFixture<HeaderImpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderImpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
