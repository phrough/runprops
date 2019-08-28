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

  private _editMode = false;

  @HostBinding('class.is-editing') get editMode(): boolean {
    return this.hasInvalidField || this._editMode;
  }
  set editMode(newVal: boolean) {
    this._editMode = newVal;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  get hasInvalidField(): boolean {
    // TODO: This should be specific to this pane context rather than the entire FormArray.
    return this.formArray.status === 'INVALID';
  }

  constructor() { }

  ngOnInit() {
  }

}
