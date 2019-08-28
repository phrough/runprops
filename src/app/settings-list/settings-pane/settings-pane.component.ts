import { ComponentPortal, Portal, ComponentType, PortalInjector } from '@angular/cdk/portal';
import { Component, HostBinding, Input, OnInit, ViewEncapsulation, InjectionToken, Injector } from '@angular/core';
import { FormArray } from '@angular/forms';

import { SettingPaneItem } from '../setting-pane-item';

/**
 * This is an injection token used to inject node information from a data tree.
 */
export const SETTINGS_DATA = new InjectionToken<any>('ComponentSettingsData');
export const FORM_ARRAY = new InjectionToken<FormArray>('SettingsListFormArray');

@Component({
  selector: 'app-settings-pane',
  templateUrl: './settings-pane.component.html',
  styleUrls: ['./settings-pane.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SettingsPaneComponent implements OnInit {
  portal: Portal<any>;

  @Input() settingsPaneItem: SettingPaneItem;

  /**
   * A component portal to render the demo inside of.
   */
  settingsComponentPortal: ComponentPortal<{component: any}>;

  @Input() formArray: FormArray;

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
    return !!this.formArray && this.formArray.status === 'INVALID';
  }

  constructor(private injector: Injector) {}

  ngOnInit() {

    console.log(this.formArray);
    console.log(this.settingsPaneItem);
    const tokens = new WeakMap();
    tokens.set(SETTINGS_DATA, this.settingsPaneItem.data);
    tokens.set(FORM_ARRAY, this.formArray);
    this.portal = new ComponentPortal(this.settingsPaneItem.component, null, new PortalInjector(this.injector, tokens));
    // this._portalInstance = new ComponentPortal(this.settingsPaneItem.component);
  }

}
