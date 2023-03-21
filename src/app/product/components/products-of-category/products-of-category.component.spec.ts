import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOfCategoryComponent } from './products-of-category.component';

describe('ProductsOfCategoryComponent', () => {
  let component: ProductsOfCategoryComponent;
  let fixture: ComponentFixture<ProductsOfCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsOfCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsOfCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
