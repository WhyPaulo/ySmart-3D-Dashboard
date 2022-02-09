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
      .get('https://ysmartdb.whymob.dev/get/filtred-sessions')
      .subscribe(Response => {
          console.log()
        // If response comes
        this.sessions = Response;
        this.sessions.forEach(session => {
            session.startTime *= (session.startTime < 2000000000)? 1000 : 1;
            session.endTime *= (session.endTime < 2000000000)? 1000 : 1;
            session.startDate = new Date(session.startTime).toLocaleString(
                'pt-PT'
            );
            session.endDate = (session.endTime)?new Date(session.endTime).toLocaleString(
                'pt-PT'
            ):'N/D';
            session.duration = (session.endTime)?msToHMS(session.endTime-session.startTime):'N/D';
        });
        this.showSpinner = false;
      });
  }
  
}
function msToHMS( ms ) {
    // 1- Convert to seconds:
    let seconds = ms / 1000;
    // 2- Extract hours:
    const hours = Math.round( seconds / 3600 ); // 3,600 seconds in 1 hour
    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    const minutes = Math.round( seconds / 60 ); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = Math.round(seconds % 60);
    return String(hours).padStart(2,'0')+":"+String(minutes).padStart(2,'0')+":"+String(seconds).padStart(2,'0');
}
