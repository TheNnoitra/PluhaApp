import {Component, OnInit, Input} from '@angular/core';
import {UserInfo} from '../../../../models/user-info';

@Component({
  selector: 'app-response-item',
  templateUrl: './response-item.component.html',
  styleUrls: ['./response-item.component.scss']
})
export class ResponseItemComponent {

  @Input() resultItem?: UserInfo;

  openInNewTab(url: string) {
    window.open(url, "_blank");
  }

}
