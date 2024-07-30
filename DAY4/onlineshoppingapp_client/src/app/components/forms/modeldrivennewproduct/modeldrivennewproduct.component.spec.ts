import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldrivennewproductComponent } from './modeldrivennewproduct.component';

describe('ModeldrivennewproductComponent', () => {
  let component: ModeldrivennewproductComponent;
  let fixture: ComponentFixture<ModeldrivennewproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModeldrivennewproductComponent]
    });
    fixture = TestBed.createComponent(ModeldrivennewproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
