import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ConfigService} from '../shared/config.service';

@Injectable({
  providedIn: 'root'
})
export class InvestmentCategoriesService {

  private investmentServiceClient: any;

  constructor(private httpClient: HttpClient,
              private configService: ConfigService
  ) {
    this.investmentServiceClient = this.configService.config ? this.configService.config.investmentServiceClient : null;
  }

  loadInvestmentCategoties(): Observable<any[]> {
    //console.log(this.investmentServiceClient);
    return this.httpClient.get(`${this.investmentServiceClient.apiUrl}/invest-categories`)
      .pipe(
        map((res: any) => {
          return res.categories ? res.categories : [];
        })
      );
  }
}
