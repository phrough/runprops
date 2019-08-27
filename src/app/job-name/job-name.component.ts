import { Component, OnInit } from '@angular/core';
import { SettingsPaneComponent } from '../settings-list/settings-pane/settings-pane.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-job-name',
  templateUrl: './job-name.component.html',
  styleUrls: ['./job-name.component.scss'],
})
export class JobNameComponent extends SettingsPaneComponent implements OnInit {

  jobNameControl = new FormControl('');

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
