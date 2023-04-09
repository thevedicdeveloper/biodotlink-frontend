import { Component } from '@angular/core';

@Component({
  selector: 'bio-profile-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
hashnnodeIcon: string = "assets/hashnode.png";
hashnnodeName: string = "Hashnode";
hashnnodeURL: string = "https://hashnode.com/@vedicdeveloper";

devIcon: string = "assets/dev.png";
devName: string = "Dev";
devURL: string = "https://dev.to/vedicdeveloper";

mediumIcon: string = "assets/medium.png";
mediumName: string = "Medium";
mediumURL: string = "https://medium.com/@vedicdeveloper";

buymeacoffeeIcon: string = "assets/buymeacoffee.png";
buymeacoffeeName: string = "Buy Me A Coffee";
buymeacoffeeURL: string = "https://www.buymeacoffee.com/vedicdeveloper";
}
