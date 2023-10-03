import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelBlrComponent } from './hotel-blr.component';

describe('HotelBlrComponent', () => {
  let component: HotelBlrComponent;
  let fixture: ComponentFixture<HotelBlrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelBlrComponent]
    });
    fixture = TestBed.createComponent(HotelBlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
