import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannersRoutingModule } from './banners-routing.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AddBannerComponent } from './add-banner/add-banner.component';
// import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AddBannerComponent],
  imports: [CommonModule, BannersRoutingModule, ImageCropperModule],
})
export class BannersModule {}
