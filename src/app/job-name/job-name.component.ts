import { Component, OnInit, Inject } from '@angular/core';
import { SETTINGS_DATA, FORM_ARRAY } from '../settings-list/settings-pane/settings-pane.component';
import { FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-job-name',
  templateUrl: './job-name.component.html',
  styleUrls: ['./job-name.component.scss'],
})
export class JobNameComponent implements OnInit {

  jobNameControl: FormControl;

  constructor(
    @Inject(SETTINGS_DATA) private data: any,
    @Inject(FORM_ARRAY) private formArray: FormArray,
  ) {}

  ngOnInit() {
    this.jobNameControl = new FormControl(this.data.job.name, [
      Validators.required,
      Validators.minLength(4),
    ]);

    this.formArray.push(this.jobNameControl);
  }

}
