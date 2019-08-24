import { Component, OnInit } from '@angular/core';
import { SettingsPaneComponent } from '../settings-list/settings-pane/settings-pane.component';

@Component({
  selector: 'app-job-name',
  templateUrl: './job-name.component.html',
  styleUrls: ['./job-name.component.scss'],
})
export class JobNameComponent extends SettingsPaneComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
