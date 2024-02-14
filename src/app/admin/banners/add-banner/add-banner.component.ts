import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-banner',
  //   standalone: true,
  //   imports: [CommonModule],
  templateUrl: './add-banner.component.html',
  styleUrl: './add-banner.component.scss',
})
export class AddBannerComponent {
  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private sanitizer: DomSanitizer) {}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
}
