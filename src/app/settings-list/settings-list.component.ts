import { Component, Input, ChangeDetectorRef } from '@angular/core';
import { SettingPaneItem } from './setting-pane-item';
import { FormArray } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '*',
        opacity: 1,
      })),
      state('closed', style({
        height: '0',
        opacity: 0,
      })),
      transition('* => *', [
        animate('0.25s')
      ]),
    ]),
  ],
})
export class SettingsListComponent {
  @Input() title: string;

  // This would be defined in a flow type specific config file and passed in.
  @Input() listComponents: SettingPaneItem[];

  @Input() formArray: FormArray;

  _settingsVisible = false;

  get settingsVisible(): boolean {
    // forced visibility if any fields are invalid, otherwise return the cached value.
    return this.hasInvalidField || this._settingsVisible;
  }

  set settingsVisible(newVal) {
    this._settingsVisible = newVal;
  }

  get hasInvalidField(): boolean {
    return this.formArray.status === 'INVALID';
  }

  toggleSettingsVisibility() {
    this.settingsVisible = !this.settingsVisible;
  }

  constructor(private cdr: ChangeDetectorRef) { }

}
