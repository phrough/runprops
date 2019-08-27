import { Component, OnInit } from '@angular/core';
import { SettingsPaneComponent } from '../settings-list/settings-pane/settings-pane.component';
import { FormControl, Validators } from '@angular/forms';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-job-name',
  templateUrl: './job-name.component.html',
  styleUrls: ['./job-name.component.scss'],
})
export class JobNameComponent extends SettingsPaneComponent implements OnInit {

  jobNameControl: FormControl;

  constructor() {
    super();
  }

  ngOnInit() {
    this.jobNameControl = new FormControl(this.data.job.name, [
      Validators.required,
      Validators.minLength(4),
    ]);

    this.formArray.push(this.jobNameControl);
  }

}
