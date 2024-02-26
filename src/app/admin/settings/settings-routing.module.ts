import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { AddPushNotificationComponent } from './add-push-notification/add-push-notification.component';
import { UserTypeListComponent } from './user-type-list/user-type-list.component';

const routes: Routes = [
  {
    path: 'add-push-notification',
    component: AddPushNotificationComponent
  },
  {
    path: 'push-notification-list',
    component: PushNotificationComponent
  },
  {
    path: 'user-type-list',
    component: UserTypeListComponent
  },
  {
    path: 'user-type-access',
    component: UserTypeListComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
