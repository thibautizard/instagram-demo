import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateIconComponent } from './icons/create.component';
import { HomeIconComponent } from './icons/home.component';
import { SearchIconComponent } from './icons/search.component';

interface Navlink {
  label: string;
  icon: string;
}

@Component({
  selector: 'insta-demo-navlinks',
  standalone: true,
  imports: [CommonModule, CreateIconComponent, HomeIconComponent, SearchIconComponent],
  templateUrl: './navlinks.component.html',
  styleUrls: ['./navlinks.component.scss']
})

export class NavlinksComponent {
  navlinks: Array<Navlink> = [
    {
      label: 'Accueil',
      icon: 'home'
    },
    {
      label: 'Recherche',
      icon: 'search'
    }
  ]
}
