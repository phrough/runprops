import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobTimeComponent } from './job-time/job-time.component';
import { SettingsListComponent } from './settings-list/settings-list.component';
import { SettingsPaneDirective } from './settings-list/settings-pane/settings-pane.directive';
import { JobNameComponent } from './job-name/job-name.component';
import { SettingsPaneComponent } from './settings-list/settings-pane/settings-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    JobTimeComponent,
    SettingsListComponent,
    SettingsPaneDirective,
    JobNameComponent,
    SettingsPaneComponent,
  ],
  entryComponents: [

    JobTimeComponent,
    JobNameComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
