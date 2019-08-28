import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalModule } from '@angular/cdk/portal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobTimeComponent } from './job-time/job-time.component';
import { SettingsListComponent } from './settings-list/settings-list.component';
import { JobNameComponent } from './job-name/job-name.component';
import { SettingsPaneComponent } from './settings-list/settings-pane/settings-pane.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    JobTimeComponent,
    SettingsListComponent,
    JobNameComponent,
    SettingsPaneComponent,
  ],
  entryComponents: [

    JobTimeComponent,
    JobNameComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    PortalModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
