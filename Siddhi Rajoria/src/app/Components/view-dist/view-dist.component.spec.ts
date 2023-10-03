import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDistComponent } from './view-dist.component';

describe('ViewDistComponent', () => {
  let component: ViewDistComponent;
  let fixture: ComponentFixture<ViewDistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewDistComponent]
    });
    fixture = TestBed.createComponent(ViewDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
