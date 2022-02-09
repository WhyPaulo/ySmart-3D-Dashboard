import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-pag-sessions',
  templateUrl: './pag-sessions.component.html',
  styleUrls: ['./pag-sessions.component.css']
})
export class PagSessionsComponent implements AfterViewInit {
  displayedColumns: string[] = ['session','startDate', 'duration', 'frames'];//, 'link'
  ysmartData: ysmartData | undefined;
  data: Session[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator ;

  constructor(private _httpClient: HttpClient) {}

  ngAfterViewInit() {
    this.ysmartData = new ysmartData(this._httpClient);

    merge(this.paginator.page)
        .pipe(
            startWith({}),
            switchMap(() => {
              this.isLoadingResults = true;
              return this.ysmartData!.getSessions(
                  this.paginator.pageIndex
              ).pipe(catchError(() => observableOf(null)));
            }),
            map(data => {
              // Flip flag to show that loading has finished.
              this.isLoadingResults = false;

              if (data === null) {
                return [];
              }
              data.sessions.forEach(session => {
                  session.startTime *= (session.startTime < 2000000000)? 1000 : 1;
                  session.endTime *= (session.endTime < 2000000000)? 1000 : 1;
                  session.startDate = new Date(session.startTime).toLocaleString(
                      'pt-PT'
                  );
                  session.endDate = new Date(session.endTime).toLocaleString(
                      'pt-PT'
                  );
                  session.duration = (session.endTime)?msToHMS(session.endTime-session.startTime):'N/D'
              });
              console.log(data)
              // Only refresh the result length if there is new data.
              this.resultsLength = data.total_count;
              return data.sessions;
            }),
        )
        .subscribe(data => (this.data = data));
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

export interface Sessions {
  sessions: Session[];
  total_count: number;
}

export interface Session {
  session: number;
  startTime: number;
  startDate: string;
  endTime: number;
  endDate: string;
  duration: string;
  frames: number;
  totalFrames: number;
}

export class ysmartData {
  constructor(private _httpClient: HttpClient) {}

  getSessions(page: number): Observable<Sessions> {
    const requestUrl = `https://ysmartdb.whymob.dev/get/sessions/${ page }`;
    return this._httpClient.get<Sessions>(requestUrl);
  }
}