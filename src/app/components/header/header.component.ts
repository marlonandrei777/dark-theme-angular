import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public icon: string = 'moon';

  constructor() {}

  ngOnInit(): void {}

  public toogle() {
    const theme = document.body.classList.toggle('dark-theme');

    if (theme) {
      return (this.icon = 'sun');
    }

    return (this.icon = 'moon');
  }
}
