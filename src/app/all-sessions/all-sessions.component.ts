import { Component, OnInit } from '@angular/core';
import { SessionsService } from './sessions.service';

@Component({
  selector: 'app-all-sessions',
  templateUrl: './all-sessions.component.html',
  styleUrls: ['./all-sessions.component.css']
})
export class AllSessionsComponent implements OnInit {
  ngOnInit() {}

  sessions: any;
  constructor(private sess: SessionsService) {
    sess.getData().subscribe((data: any) => {
      this.sessions = data;
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
