import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [SidebarComponent],
  styleUrls: ['./app.component.scss'],
  standalone: true
})

class AppComponent {
  title = 'instagram-demo';
}

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserAnimationsModule), provideRouter(appRoutes)]
})
