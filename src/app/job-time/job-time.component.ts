import { Component, OnInit } from '@angular/core';
import { SettingsPaneComponent } from '../settings-list/settings-pane/settings-pane.component';

@Component({
  selector: 'app-job-time',
  templateUrl: './job-time.component.html',
  styleUrls: ['./job-time.component.scss'],
})
export class JobTimeComponent extends SettingsPaneComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
