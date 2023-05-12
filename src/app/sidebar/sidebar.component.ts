import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LogoComponent } from '../logo/logo.component';
@Component({
  selector: 'insta-demo-sidebar',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, LogoComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

}
