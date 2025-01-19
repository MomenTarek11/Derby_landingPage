import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import * as AOS from 'aos';
import { SevicesComponent } from "./components/sevices/sevices.component";
import { SponsersComponent } from "./components/sponsers/sponsers.component";
import { FooterComponent } from "./shared/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, SevicesComponent, SponsersComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'derby_landing';
  ngOnInit(): void {
    AOS.init();
  }
}
