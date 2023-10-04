import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelKolComponent } from './hotel-kol.component';

describe('HotelKolComponent', () => {
  let component: HotelKolComponent;
  let fixture: ComponentFixture<HotelKolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelKolComponent]
    });
    fixture = TestBed.createComponent(HotelKolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
