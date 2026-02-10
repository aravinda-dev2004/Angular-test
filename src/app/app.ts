import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./page/nav/nav";
import { Footer } from "./page/footer/footer";
import { Body } from "./page/body/body";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer, Body],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-app');
  name:string = 'shr';
}
