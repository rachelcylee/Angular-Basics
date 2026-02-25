import { Component, output } from '@angular/core';
import { MaterialModule } from "../../material/material-module";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-side-nav-list',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './side-nav-list.html',
  styleUrl: './side-nav-list.css',
})
export class SideNavList {
  sideNavClose = output<void>();
  onSideNavClose() {
    this.sideNavClose.emit();
  }
}
