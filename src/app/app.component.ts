import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { SettingPaneItem } from './settings-list/setting-pane-item';
import { JobNameComponent } from './job-name/job-name.component';
import { JobTimeComponent } from './job-time/job-time.component';
import { FormArray, FormGroup } from '@angular/forms';

const data = {
  job: {
    environment: 'kVmWare',
    stuff: 'things',
    etc: 2,
    id: 4,
    name: 'job name',
    time: '12:45am',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  // This would be defined in a flow type specific config file and passed in.
  listComponents: SettingPaneItem[] = [
    new SettingPaneItem(JobNameComponent, data),
    new SettingPaneItem(JobTimeComponent, data),
  ];

  formPanels: FormArray = new FormArray([]);

  megaForm: FormGroup = new FormGroup({
    panels: this.formPanels,
  });

  ngOnInit() {
    console.log('onInit', this.megaForm);
  }

  ngAfterViewChecked() {
    console.log('afterViewChecked', this.megaForm);
  }

  onSubmit(): void {
    console.log('onSubmit', this.megaForm);
  }
}
