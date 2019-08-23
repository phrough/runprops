import { Type } from '@angular/core';

export class SettingPaneItem {
  constructor(public component: Type<any>, public job: any) {}
}
