import { Component, Input } from '@angular/core';

@Component({
  selector: 'bio-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input("icon") icon: string;
  @Input("name") name: string;
  @Input("link") link: string;

  constructor() {
    this.icon = "";
    this.name = "";
    this.link = "";
  }

}
