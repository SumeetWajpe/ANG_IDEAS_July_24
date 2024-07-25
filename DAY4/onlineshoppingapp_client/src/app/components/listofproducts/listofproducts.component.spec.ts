import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofproductsComponent } from './listofproducts.component';

describe('ListofproductsComponent', () => {
  let component: ListofproductsComponent;
  let fixture: ComponentFixture<ListofproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListofproductsComponent]
    });
    fixture = TestBed.createComponent(ListofproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
