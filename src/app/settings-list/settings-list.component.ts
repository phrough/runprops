import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver, ViewContainerRef, ViewChildren, QueryList, Input, ChangeDetectorRef, HostBinding } from '@angular/core';
import { SettingsPaneDirective } from './settings-pane/settings-pane.directive';
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
export class SettingsListComponent implements OnInit, AfterViewInit, OnDestroy {
  // TODO: proper type?
  private componentRefs = [];

  // Can make this viewchildren maybe? move logic to ngAfterViewInit so they can be created via ngFor
  @ViewChildren(SettingsPaneDirective) settingPaneHosts: QueryList<SettingsPaneDirective>;

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

    this.componentRefs.forEach(componentRef => componentRef.instance.settingsVisible = this.settingsVisible);
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let settingsPanelHosts = this.settingPaneHosts.toArray();

    for (let index = 0; index < this.listComponents.length; index++) {
      const listItem = this.listComponents[index];
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(listItem.component);
      const viewContainerRef = settingsPanelHosts[index].viewContainerRef;
      viewContainerRef.clear();

      this.componentRefs.push(viewContainerRef.createComponent(componentFactory));
      this.componentRefs[index].instance.data = listItem.data;
      this.componentRefs[index].instance.formArray = this.formArray;
    }

    // Since these changes are being made after the view has initialized, fire change detection manually.
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
  }

}
