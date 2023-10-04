import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelJaiComponent } from './hotel-jai.component';

describe('HotelJaiComponent', () => {
  let component: HotelJaiComponent;
  let fixture: ComponentFixture<HotelJaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelJaiComponent]
    });
    fixture = TestBed.createComponent(HotelJaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
