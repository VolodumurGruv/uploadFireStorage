import { Injectable } from '@angular/core';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  upload(file: any) {
    initializeApp(environment.firebase);
    const storage = getStorage();
    const imageRef = ref(storage, `befamily/${file.name}`);

    uploadBytes(imageRef, file).then((snapshot) => {
      console.log('Image was uploaded');
    });
  }

  getUrl(): Promise<any> {
    initializeApp(environment.firebase);
    const storage = getStorage();

    return getDownloadURL(ref(storage, 'befamily/369.png'));
  }
}
