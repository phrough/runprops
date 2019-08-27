import { Component, OnInit, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-settings-pane',
  templateUrl: './settings-pane.component.html',
  styleUrls: ['./settings-pane.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingsPaneComponent implements OnInit {

  @Input() formArray: FormArray;

  data: any;

  // strictly for style targeting
  @HostBinding('class.app-settings-pane') private paneClass = true;

  @HostBinding('class.is-editing') @Input() inEditMode = false;

  constructor() { }

  ngOnInit() {
  }

}
