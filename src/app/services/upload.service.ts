import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor(
    private storage: AngularFireStorage,
    private store: AngularFirestore
  ) {}

  getAll(url: string) {
    //get all full path from storage
    const mapUrls: any = [];
    this.storage.storage
      .ref('images/')
      .listAll()
      .then((b: any) =>
        b.items.forEach((i: any) =>
          //i.name get file's name
          //i.fullPath get path (images/)and file's name
          {
            i.getDownloadURL().then((b: any) => {
              mapUrls.push(b);
            });
          }
        )
      );
  }

  upload(event: any): Observable<number | undefined> {
    const file = event.target.files[0];
    const filePath = `images/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef
            .getDownloadURL()
            .subscribe((a) =>
              this.store.collection('imageUrls/').add({ imageUrl: a })
            )
        )
      )
      .subscribe();

    return task.percentageChanges();
  }

  deleteImage(url: string): void {
    this.storage.storage.refFromURL(url).delete();
  }
}
