import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SessionService {
  constructor(private http: HttpClient) {}
  getData(id: number) {
    return this.http.get(
      'https://ysmartdata.whymob.dev/get/actor-frames/' + id
    );
  }
}
