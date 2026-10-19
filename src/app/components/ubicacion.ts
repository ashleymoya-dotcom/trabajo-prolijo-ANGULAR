import { Component } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  standalone: true,
  template: `
    <section id="ubicacion" class="ubicacion" aria-labelledby="ubicacion-title">
      <div class="section-heading">
        <h2 id="ubicacion-title">Ubicación</h2>
      </div>
      <p>Megacenter La Paz</p>
      <address>Av. Rafael Pabón, zona Irpavi, frente al Colegio Militar. La Paz, Bolivia.</address>
      <a
        class="pin-button"
        href="https://www.google.com/maps/search/?api=1&query=Megacenter%20La%20Paz%2C%20Av.%20Rafael%20Pab%C3%B3n%2C%20Irpavi%2C%20La%20Paz%2C%20Bolivia"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        Ver en el mapa
      </a>
    </section>
  `,
})
export class Ubicacion {}
