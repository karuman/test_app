import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public modalController: ModalController
  ) {}

  async presentModal(){
    const modal = await this.modalController.create({
      component: ModalUploadComponent,
      componentProps: { value : 123}
    });
    return await modal.present();
  }

}
