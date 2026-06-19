import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './modules/navbar/navbar';
import { CommonModule } from '@angular/common';
import { Footer } from "./modules/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public  title = signal('Market Place');

}

