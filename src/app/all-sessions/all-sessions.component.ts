import { Component, OnInit } from '@angular/core';
import { SessionsService } from '../sessions.service';
import moment from 'moment';

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
        session.startDate = moment(session.startTime * 1000).format(
          'DD/MM/YYYY HH:mm:ss'
        );
        session.endDate = moment(session.endTime * 1000).format(
          'DD/MM/YYYY HH:mm:ss'
        );
      });
    });
  }
}
