import { Component, OnInit } from '@angular/core';
import { url } from 'inspector';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  public imageName!: string;
  public urlImage!: string;
  constructor(private uploadService: UploadService) {}

  ngOnInit(): void {}

  uploadImage(event: any) {
    const file: File = event.target.files[0];

    this.uploadService.upload(file);
  }

  getImageUrl() {
    this.uploadService.getUrl().then((url) => (this.urlImage = url));
  }
}
