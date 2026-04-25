import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Footer],

  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout { 
   onRouteChange(container: HTMLElement) {
  container.classList.remove('route-container');

  // force reflow (very important)
  void container.offsetWidth;

  container.classList.add('route-container');
}
}
