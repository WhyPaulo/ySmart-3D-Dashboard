import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-processed-sessions',
  templateUrl: './processed-sessions.component.html',
  styleUrls: ['./processed-sessions.component.css']
})
export class ProcessedSessionsComponent implements OnInit {
  public sessions: any;
  public showSpinner = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://ysmartdata.whymob.dev/get/filtred-sessions')
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
        this.showSpinner = false;
      });
  }
  
}
