import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


import { Observable } from 'rxjs';
import { UploadService } from 'src/app/services/upload.service';

export interface Item {
  id?: string;
  imageUrl: string;
}
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit{
  public urlImages = this.store
    .collection('imageUrls')
    .valueChanges({ idField: 'id' }) as Observable<Item[]>;

  constructor(

    private store: AngularFirestore,
    private uploadService: UploadService
  ) {}

  ngOnInit(): void {

  }

  getAll(url: string) {
    this.uploadService.getAll(url)
  }


  deleteImage(i: string | undefined, url: string): void {
    if (i) {
      // will be deleted from store but not from storage
      this.store.collection('imageUrls').doc(i).delete();
      this.uploadService.deleteImage(url);
    }
  }
}
