import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-sessions',
  templateUrl: './all-sessions.component.html',
  styleUrls: ['./all-sessions.component.css']
})
export class AllSessionsComponent implements OnInit {
  
  public sessions: any;
  public showSpinner = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('https://ysmart01.azurewebsites.net/get/sessions')
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
