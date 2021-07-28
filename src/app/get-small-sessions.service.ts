import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetSmallSessionsService {
  constructor(private http: HttpClient) {}
  getData(duration: number) {
    return this.http.get(
      'https://ysmartdata.whymob.dev/get/small-sessions/' + duration
    );
  }
}
