import { Component, OnInit, Input, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-settings-pane',
  templateUrl: './settings-pane.component.html',
  styleUrls: ['./settings-pane.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingsPaneComponent implements OnInit {

  data: any;

  @HostBinding('class.app-settings-pane') private paneClass = true;

  @HostBinding('class.is-editing') @Input() inEditMode = false;

  constructor() { }

  ngOnInit() {
  }

}
