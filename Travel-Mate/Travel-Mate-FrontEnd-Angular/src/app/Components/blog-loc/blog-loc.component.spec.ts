import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLocComponent } from './blog-loc.component';

describe('BlogLocComponent', () => {
  let component: BlogLocComponent;
  let fixture: ComponentFixture<BlogLocComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogLocComponent]
    });
    fixture = TestBed.createComponent(BlogLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
