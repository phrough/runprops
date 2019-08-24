import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver, ViewContainerRef, ViewChildren, QueryList, Input, ChangeDetectorRef } from '@angular/core';
import { SettingsPaneDirective } from './settings-pane/settings-pane.directive';
import { SettingPaneItem } from './setting-pane-item';
import { MatListItem } from '@angular/material';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
})
export class SettingsListComponent implements OnInit, AfterViewInit, OnDestroy {

  // Can make this viewchildren maybe? move logic to ngAfterViewInit so they can be created via ngFor
  @ViewChildren(SettingsPaneDirective) settingPaneHosts: QueryList<SettingsPaneDirective>;

  // This would be defined in a flow type specific config file and passed in.
  @Input() listComponents: SettingPaneItem[];

  _editing = false;

  get editing() {
    return this._editing;
  }

  set editing(newVal) {
    this._editing = newVal;
  }

  toggleEdit() {
    this.editing = !this.editing;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.settingPaneHosts);
    let settingsPanelHosts = this.settingPaneHosts.toArray();

    for (let index = 0; index < this.listComponents.length; index++) {
      const listItem = this.listComponents[index];
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(listItem.component);
      const viewContainerRef = settingsPanelHosts[index].viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      componentRef.instance.data = listItem.data;
    }

    this.cdr.detectChanges();
  }

  ngOnDestroy() {
  }

}
