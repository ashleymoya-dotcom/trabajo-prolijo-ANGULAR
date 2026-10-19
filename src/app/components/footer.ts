import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer id="ubicacion" class="footer">
      <div class="footer__heading">
        <h2>Ubicación</h2>
        <p>Encuentra tu sede Cine Center en Santa Cruz.</p>
      </div>
      <div class="locations">
        <a class="location-card" href="https://www.google.com/maps/search/?api=1&amp;query=Cine+Center+El+Trompillo+Santa+Cruz+Bolivia" target="_blank" rel="noopener noreferrer">
          <h3>Cine Center – Av. El Trompillo</h3>
          <p><strong>Dirección:</strong> Avenida El Trompillo, segundo anillo (esquina René Moreno).</p>
          <p><strong>Características:</strong> Sede tradicional con opciones de comida rápida, salas de proyección estándar y formatos especiales.</p>
          <p><strong>Horarios habituales:</strong> Lunes a sábado de 10:00 AM a 1:00 AM; domingos de 10:00 AM a 12:00 AM.</p>
        </a>
        <a class="location-card" href="https://www.google.com/maps/search/?api=1&amp;query=Cine+Center+Avenida+Brasil+Megacentro+Santa+Cruz+Bolivia" target="_blank" rel="noopener noreferrer">
          <h3>Cine Center – Avenida Brasil</h3>
          <p><strong>Dirección:</strong> Segundo piso del Megacentro Comercial, sobre la Avenida Brasil. Acceso a estacionamientos por la calle Manuel Valverde o desde la Av. Brasil.</p>
          <p><strong>Características:</strong> Sucursal moderna con salas CX, butacas reclinables y áreas de entretenimiento familiar.</p>
          <p><strong>Horarios habituales:</strong> Lunes, martes y jueves a domingo de 11:30 AM a 10:30 PM; miércoles de 11:00 AM a 10:30 PM.</p>
        </a>
      </div>
    </footer>
  `,
})
export class Footer {}
