import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showSubToolbars = false;
  showSubmenu = false;


  toggleSubmenu() {
    this.showSubToolbars = !this.showSubToolbars;
    this.showSubmenu = !this.showSubmenu;
  }

}
