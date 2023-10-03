import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabComponent } from './cab.component';

describe('CabComponent', () => {
  let component: CabComponent;
  let fixture: ComponentFixture<CabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabComponent]
    });
    fixture = TestBed.createComponent(CabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
