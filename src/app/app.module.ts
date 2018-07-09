import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { InvestmentCategoriesComponent } from './investment-categories/investment-categories.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './shared/token-interceptor';
import {ConfigService} from './shared/config.service';

const configServiceFactory = (configService: ConfigService ) => {
  return () => configService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    InvestmentCategoriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      multi: true,
      deps: [ConfigService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
