import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBannerComponent } from './add-banner/add-banner.component';
import { BannerListComponent } from './banner-list/banner-list.component';

const routes: Routes = [
  {
    path: 'add-banner',
    component: AddBannerComponent,
  },
  {
    path: 'banner-list',
    component: BannerListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannersRoutingModule { }
