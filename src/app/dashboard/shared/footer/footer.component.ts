import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'footer-cmp',
  templateUrl: 'footer.component.html'
})

export class FooterComponent{
  public currentYear = new Date().getFullYear();
  public madeBy: string = "http://www.elvnthaus.com";
}
