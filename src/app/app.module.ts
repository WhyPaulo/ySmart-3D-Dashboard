import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SmallSessionsComponent } from './small-sessions/small-sessions.component';
import { ViewerComponent } from './viewer/viewer.component';
import { AllSessionsComponent } from './all-sessions/all-sessions.component';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { ProcessedSessionsComponent } from './processed-sessions/processed-sessions.component';

const routes: Routes = [
  { path: '', component: AllSessionsComponent },
  { path: 'small', component: SmallSessionsComponent },
  { path: 'processed', component: ProcessedSessionsComponent },
  { path: 'view/:id', component: ViewerComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [
    AppComponent,
    SmallSessionsComponent,
    ViewerComponent,
    AllSessionsComponent,
    SessionDetailsComponent,
    ProcessedSessionsComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/' + (window.location.pathname.split('/')[1] || '')
    }
  ]
})
export class AppModule {}
