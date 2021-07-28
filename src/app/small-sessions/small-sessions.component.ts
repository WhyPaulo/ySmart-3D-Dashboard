import { Component, OnInit } from '@angular/core';
import { GetSmallSessionsService } from '../get-small-sessions.service';

@Component({
  selector: 'app-small-sessions',
  templateUrl: './small-sessions.component.html',
  styleUrls: ['./small-sessions.component.css']
})
export class SmallSessionsComponent implements OnInit {
  limit = 10;
  sessions: any;
  constructor(private sess: GetSmallSessionsService) {
    sess.getData(this.limit).subscribe((data: any) => {
      this.sessions = data;
    });
  }

  ngOnInit() {}
}
