import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-small-sessions',
  templateUrl: './small-sessions.component.html',
  styleUrls: ['./small-sessions.component.css']
})
export class SmallSessionsComponent implements OnInit {
  limit = 10;
  sessions: any;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://ysmartdata.whymob.dev/get/small-sessions/'+this.limit)
      .subscribe(Response => {
        // If response comes
        this.sessions = Response;
        this.sessions.forEach(session => {
          session.startDate = new Date(session.startTime * 1000).toLocaleString(
            'pt-PT'
          );
          session.endDate = new Date(session.endTime * 1000).toLocaleString(
            'pt-PT'
          );
        });
      });
  }
}
