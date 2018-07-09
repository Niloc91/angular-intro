import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  get config(): any {
    return this._config;
  }

  set config(value: any) {
    this._config = value;
  }

  private _config: any;

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('assets/config.json')
      .subscribe((config) => {
        this.config = config;
      });
  }

  init(){
    return this.httpClient
      .get('assets/config.json')
      .toPromise()
      .then((config) => {
        this.config = config;
      })
      .catch((error) => {
        console.error('Error initalzing config', error);
      });
  }
}
