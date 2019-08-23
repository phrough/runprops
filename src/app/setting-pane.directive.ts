import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSettingPane]'
})
export class SettingPaneDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
