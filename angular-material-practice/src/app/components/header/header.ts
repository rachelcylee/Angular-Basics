import { Component, output } from '@angular/core';
import { MaterialModule } from "../../material/material-module";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  sideNavToggle = output<void>();
  onToggleSidenav() {
    this.sideNavToggle.emit();
  }
}