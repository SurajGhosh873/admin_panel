import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { AddPushNotificationComponent } from './add-push-notification/add-push-notification.component';


@NgModule({
  declarations: [PushNotificationComponent,AddPushNotificationComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
