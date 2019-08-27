import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver, ViewContainerRef, ViewChildren, QueryList, Input, ChangeDetectorRef } from '@angular/core';
import { SettingsPaneDirective } from './settings-pane/settings-pane.directive';
import { SettingPaneItem } from './setting-pane-item';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.scss']
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

  _editing = false;

  get editing() {
    // forced editing if any fields are invalid, otherwise return the cached value.
    return this.hasInvalidField || this._editing;
  }

  get hasInvalidField(): boolean {
    return this.formArray.status === 'INVALID';
  }

  set editing(newVal) {
    this._editing = newVal;
  }

  toggleEdit() {
    this.editing = !this.editing;

    this.componentRefs.forEach(componentRef => componentRef.instance.inEditMode = this.editing);
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
      this.componentRefs[index].instance.inEditMode = this.editing;
      this.componentRefs[index].instance.formArray = this.formArray;
    }

    // Since these changes are being made after the view has initialized, fire change detection manually.
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
  }

}
