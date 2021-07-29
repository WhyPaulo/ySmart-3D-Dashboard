import { Component, OnInit } from '@angular/core';
import moment from 'moment';

@Component({
  selector: 'app-processed-sessions',
  templateUrl: './processed-sessions.component.html',
  styleUrls: ['./processed-sessions.component.css']
})
export class ProcessedSessionsComponent implements OnInit {
  sessions: any;
  constructor() {
    this.sessions = [
      {
        session: 1625843694,
        startTime: 1625843694,
        endTime: 1625843710,
        duration: '00:00:16',
        frames: 263
      },
      {
        session: 1625844273,
        startTime: 1625844273,
        endTime: 1625844455,
        duration: '00:03:02',
        frames: 4748
      },
      {
        session: 1626265938,
        startTime: 1626265938,
        endTime: 1626265952,
        duration: '00:00:14',
        frames: 182
      }
    ];
    this.sessions.forEach(session => {
      session.startDate = moment(session.startTime * 1000).format(
        'DD/MM/YYYY HH:mm:ss'
      );
      session.endDate = moment(session.endTime * 1000).format(
        'DD/MM/YYYY HH:mm:ss'
      );
    });
  }

  ngOnInit() {}
}
