import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextColorImageComponent } from './text-color-image.component';

describe('TextColorImageComponent', () => {
  let component: TextColorImageComponent;
  let fixture: ComponentFixture<TextColorImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextColorImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextColorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
