import { Component, OnInit } from '@angular/core';
import {InvestmentCategoriesService} from './investment-categories.service';

@Component({
  selector: 'app-investment-categories',
  templateUrl: './investment-categories.component.html',
  styleUrls: ['./investment-categories.component.css']
})
export class InvestmentCategoriesComponent implements OnInit {

  public investmentCategories: any[];

  constructor(private investmentCategoriesService: InvestmentCategoriesService) { }

  ngOnInit() {
    this.investmentCategoriesService.loadInvestmentCategoties().subscribe((result) => {
      this.investmentCategories = result;
      console.log(this.investmentCategories);
    });
  }

}
