import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLandingComponent } from './custom-landing.component';

describe('CustomLandingComponent', () => {
  let component: CustomLandingComponent;
  let fixture: ComponentFixture<CustomLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
