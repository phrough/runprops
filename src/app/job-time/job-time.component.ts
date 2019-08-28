import { Component, Inject, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';

import { FORM_ARRAY, SETTINGS_DATA } from '../settings-list/settings-pane/settings-pane.component';

@Component({
  selector: 'app-job-time',
  templateUrl: './job-time.component.html',
  styleUrls: ['./job-time.component.scss'],
})
export class JobTimeComponent implements OnInit {

  constructor(
    @Inject(SETTINGS_DATA) private data: any,
    @Inject(FORM_ARRAY) private formArray: FormArray,
  ) {}

  ngOnInit() {
  }

}
