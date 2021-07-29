import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SessionsService {
  constructor(private http: HttpClient) {}
  getData() {
    return this.http.get('https://ysmartdata.whymob.dev/get/sessions');
  }
}
