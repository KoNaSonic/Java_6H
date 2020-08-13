import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleBackgroundImagesComponent } from './multiple-background-images.component';

describe('MultipleBackgroundImagesComponent', () => {
  let component: MultipleBackgroundImagesComponent;
  let fixture: ComponentFixture<MultipleBackgroundImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleBackgroundImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleBackgroundImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
