import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  template: `
    <section id="promociones" class="promociones" aria-labelledby="promociones-title">
      <div class="section-heading">
        <h2 id="promociones-title">Promociones</h2>
        <p>Ofertas únicas solo aquí.</p>
      </div>
      <div class="promociones-grid">
        @for (imagen of imagenes; track imagen.src) {
          <img [src]="imagen.src" [alt]="imagen.alt" loading="lazy" />
        }
      </div>
    </section>
  `,
})
export class Banner {
  readonly imagenes = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE74IRsVEfG7Dy0-83Xgdj4ms-_4CwfdDcTLj_Apom1M5zQ5GlsY_sFJbe&s=10', alt: 'Promoción de cine 1' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRzVXwrvAujoNV3WNhXVY3pwcSBjLM9sjQPGjTg8e6ZQ4EhCOx7RSMEJTP&s=10', alt: 'Promoción de cine 2' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYor-cXNZnp13oztfyeRoljPWcTw509d2OtgWoRfqbq0zaGVQf7AYNWw&s=10', alt: 'Promoción de cine 3' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcjeyiEck-2JLsFT8x-Sa-P24UyeBK1OWQHn9lJJ-mvaOGAlMWxnbsQU&s=10', alt: 'Promoción de cine 4' },
  ];
}
