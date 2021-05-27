import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorChangingImageComponent } from './color-changing-image.component';

describe('ColorChangingImageComponent', () => {
  let component: ColorChangingImageComponent;
  let fixture: ComponentFixture<ColorChangingImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorChangingImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorChangingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
