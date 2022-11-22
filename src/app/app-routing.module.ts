import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesComponent } from './components/images/images.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  { path: '', component: UploadComponent },
  { path: 'images', component: ImagesComponent },
  
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
