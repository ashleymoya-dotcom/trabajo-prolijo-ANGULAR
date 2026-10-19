import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  template: `
    <section id="productos" class="candy-bar" aria-labelledby="candy-title">
      <div class="section-heading">
        <h2 id="candy-title">Productos</h2>
        <p>Elige algo para disfrutar durante la película.</p>
      </div>
      <div class="candy-grid">
        <article>
          <h3>Palomitas</h3>
          <p>El clásico para acompañar cada función.</p>
        </article>
        <article>
          <h3>Bebidas</h3>
          <p>Opciones frescas para tu visita al cine.</p>
        </article>
        <article>
          <h3>Dulces y snacks</h3>
          <p>Algo más para compartir o disfrutar a tu manera.</p>
        </article>
      </div>
    </section>
  `,
})
export class Servicios {}
