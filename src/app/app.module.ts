import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobTimeComponent } from './job-time/job-time.component';
import { SettingsListComponent } from './settings-list/settings-list.component';
import { SettingsPaneDirective } from './settings-list/settings-pane/settings-pane.directive';
import { JobNameComponent } from './job-name/job-name.component';

@NgModule({
  declarations: [
    AppComponent,
    JobTimeComponent,
    SettingsListComponent,
    SettingsPaneDirective,
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
