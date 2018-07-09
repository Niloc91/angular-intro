import { TestBed, inject } from '@angular/core/testing';

import { InvestmentCategoriesService } from './investment-categories.service';

describe('InvestmentCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InvestmentCategoriesService]
    });
  });

  it('should be created', inject([InvestmentCategoriesService], (service: InvestmentCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
