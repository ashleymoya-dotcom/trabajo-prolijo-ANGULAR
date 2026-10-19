import { Component } from '@angular/core';
import { Logo } from './logo';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Logo],
  template: `
    <header class="header">
      <nav aria-label="Navegación principal">
        <a href="#cartelera">Cartelera</a>
        <a href="#productos">Productos</a>
        <a href="#promociones">Promociones</a>
        <a href="#ubicacion">Ubicación</a>
      </nav>
      <a class="brand" href="#inicio" aria-label="Multicine, ir al inicio">
        <app-logo />
      </a>
    </header>
  `,
})
export class Header {}
