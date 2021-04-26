import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingWrapperComponent } from './listing-wrapper.component';

describe('ListingWrapperComponent', () => {
  let component: ListingWrapperComponent;
  let fixture: ComponentFixture<ListingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
