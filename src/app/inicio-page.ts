import { Component } from '@angular/core';
import { Banner } from './components/banner';
import { Cartelera } from './components/cartelera';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Servicios } from './components/servicios';

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [Header, Cartelera, Servicios, Banner, Footer],
  template: `
    <app-header />
    <main id="inicio" class="page">
      <h1 class="sr-only">Multicine: cartelera y promociones</h1>
      <app-cartelera />
      <app-servicios />
      <app-banner />
    </main>
    <app-footer />
  `,
})
export class InicioPage {}
