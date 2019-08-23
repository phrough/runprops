import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSettingsPane]'
})
export class SettingsPaneDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
