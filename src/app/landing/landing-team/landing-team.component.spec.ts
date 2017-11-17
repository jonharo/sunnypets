import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTeamComponent } from './landing-team.component';

describe('LandingTeamComponent', () => {
  let component: LandingTeamComponent;
  let fixture: ComponentFixture<LandingTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
