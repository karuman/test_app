
import { Component, OnInit, Input } from '@angular/core'; // Inputを追加
import { NavParams } from '@ionic/angular'; // 追加

const RESULT = 'result';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss'],
})
export class ModalUploadComponent implements OnInit {

  // "value" passed in componentProps
  public imageSrc: any;
  public isSelected: boolean;
  @Input() value: number;
  private reader = new FileReader();

  constructor(
    navParams: NavParams // 追加
  ) { }

  ngOnInit() {    
  }

  public previewPhoto(event) {
    const file = event.target.files[0];
    this.reader.onload = ((e) => {
      this.imageSrc = e.target[RESULT];
      this.isSelected = true;
    });
    this.reader.readAsDataURL(file);
  }
}
