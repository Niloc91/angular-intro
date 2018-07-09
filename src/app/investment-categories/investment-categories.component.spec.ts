import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCategoriesComponent } from './investment-categories.component';

describe('InvestmentCategoriesComponent', () => {
  let component: InvestmentCategoriesComponent;
  let fixture: ComponentFixture<InvestmentCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
