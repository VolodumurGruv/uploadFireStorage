import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {
  loading$!: Observable<number | undefined>;
  constructor(private uploadService: UploadService) {}

  uploadImage(event: any): void {
    this.loading$ = this.uploadService.upload(event);
  }
}
