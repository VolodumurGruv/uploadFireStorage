import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent implements OnInit {
  public imageName!: string;
  constructor() {}

  ngOnInit(): void {}

  uploadImage(event: any) {
    const file: File = event.target.files[0];
    const formData = new FormData();

    formData.append('beefamily', file);
    this.imageName = file.name;

    console.log(file);
  }
}
