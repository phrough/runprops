import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobTimeComponent } from './job-time/job-time.component';
import { RunPropertiesListComponent } from './run-properties-list/run-properties-list.component';
import { SettingPaneDirective } from './setting-pane.directive';
import { JobNameComponent } from './job-name/job-name.component';

@NgModule({
  declarations: [
    AppComponent,
    JobTimeComponent,
    RunPropertiesListComponent,
    SettingPaneDirective,
    JobNameComponent,
  ],
  entryComponents: [
    JobTimeComponent,
    JobNameComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
