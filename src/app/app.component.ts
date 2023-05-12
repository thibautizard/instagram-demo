import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [SidebarComponent],
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent {
  title = 'instagram-demo';

  constructor(private _sanitizer: DomSanitizer) { }

  getSVGImageUrl(image: string) {
    let base64string = btoa(image);
    return this._sanitizer.bypassSecurityTrustResourceUrl(
      `data:image/svg+xml;base64,${base64string}`
    );
  }
}
