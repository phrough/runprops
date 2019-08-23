import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver, ViewContainerRef, ViewChildren, QueryList } from '@angular/core';
import { SettingPaneDirective } from '../setting-pane.directive';
import { SettingPaneItem } from '../setting-pane-item';
import { JobTimeComponent } from '../job-time/job-time.component';
import { JobNameComponent } from '../job-name/job-name.component';

@Component({
  selector: 'app-run-properties-list',
  templateUrl: './run-properties-list.component.html',
  styleUrls: ['./run-properties-list.component.scss']
})
export class RunPropertiesListComponent implements OnInit, AfterViewInit, OnDestroy {

  // Can make this viewchildren maybe? move logic to ngAfterViewInit so they can be created via ngFor
  @ViewChildren(SettingPaneDirective) settingPaneHosts: QueryList<SettingPaneDirective>;


  fakeJob = {
    environment: 'kVmWare',
    stuff: 'things',
    etc: 2,
    id: 4,
    name: 'job name',
    time: '12:45am',
  };

  // This would be defined in a flow type specific config file and passed in.
  listComponents: SettingPaneItem[] = [
    new SettingPaneItem(JobNameComponent, this.fakeJob),
    new SettingPaneItem(JobTimeComponent, this.fakeJob),
  ];

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.settingPaneHosts);
    let settingsPanelHosts = this.settingPaneHosts.toArray();

    for (let index = 0; index < this.listComponents.length; index++) {
      const listItem = this.listComponents[index];
      // console.log('listItem', listItem);
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(listItem.component);
      const viewContainerRef = settingsPanelHosts[index].viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent(componentFactory);
      (<JobTimeComponent>componentRef.instance).job = listItem.job;
    }
  }

  ngOnDestroy() {
  }

}
