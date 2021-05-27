import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangularBackgroundImagesComponent } from './triangular-background-images.component';

describe('TriangularBackgroundImagesComponent', () => {
  let component: TriangularBackgroundImagesComponent;
  let fixture: ComponentFixture<TriangularBackgroundImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriangularBackgroundImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangularBackgroundImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
