import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { ModalUploadComponent } from './modal-upload/modal-upload.component'

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
    ModalUploadComponent
  ],
  // entryComponentsを追加
  entryComponents: [
      ModalUploadComponent // 追加
  ]
})
export class HomePageModule {}
