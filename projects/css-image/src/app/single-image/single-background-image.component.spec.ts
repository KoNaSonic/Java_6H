import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBackgroundImageComponent } from './single-background-image.component';

describe('SingleBackgroundImageComponent', () => {
  let component: SingleBackgroundImageComponent;
  let fixture: ComponentFixture<SingleBackgroundImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBackgroundImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
