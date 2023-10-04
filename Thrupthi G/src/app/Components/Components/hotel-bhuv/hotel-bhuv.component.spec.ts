import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBhuvComponent } from './hotel-bhuv.component';

describe('HotelBhuvComponent', () => {
  let component: HotelBhuvComponent;
  let fixture: ComponentFixture<HotelBhuvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelBhuvComponent]
    });
    fixture = TestBed.createComponent(HotelBhuvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
