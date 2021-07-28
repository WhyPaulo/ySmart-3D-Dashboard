import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GetSmallSessionsService } from './get-small-sessions.service';
import { SmallSessionsComponent } from './small-sessions/small-sessions.component';
import { SceneViewerComponent } from './scene-viewer/scene-viewer.component';
import { SceneViewerService } from './scene-viewer.service';
import { ViewerComponent } from './viewer/viewer.component';
import { AllSessionsComponent } from './all-sessions/all-sessions.component';
import { SessionsService } from './sessions.service';
import { SessionDetailsComponent } from './session-details/session-details.component';

const routes: Routes = [
  { path: '', component: AllSessionsComponent },
  { path: 'small', component: SmallSessionsComponent },
  { path: 'view/:id', component: SceneViewerComponent },
  { path: 'viewer', component: ViewerComponent }
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
    HelloComponent,
    SmallSessionsComponent,
    SceneViewerComponent,
    ViewerComponent,
    AllSessionsComponent,
    SessionDetailsComponent
  ],
  bootstrap: [AppComponent],
  providers: [GetSmallSessionsService, SceneViewerService, SessionsService]
})
export class AppModule {}
