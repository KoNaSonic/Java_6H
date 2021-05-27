import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientOverlayImageComponent } from './gradient-overlay-image.component';

describe('GradientOverlayImageComponent', () => {
  let component: GradientOverlayImageComponent;
  let fixture: ComponentFixture<GradientOverlayImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradientOverlayImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradientOverlayImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
